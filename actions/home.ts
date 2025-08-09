"use server"

import aj from "@/lib/arcjet";
import { serializeCarData } from "@/lib/helper"
import {db} from "@/lib/prisma"
import { request } from "@arcjet/next";
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function getFeaturedCars(limit = 3) {
    try {
        const cars = await db.cars.findMany({
            where:{
                featured:true,
                status: "AVAILABLE"
            },
            take: limit,
            orderBy: {created_at: "desc"}
        })
        return cars.map(serializeCarData);
    } catch(error) {
        throw new Error("Error fetching featrued cars: " + error.message);
    }
}

// Function to convert image to base64
async function fileToBase64(file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    return buffer.toString("base64");
}

export async function processImageSearch(file) {
    try {
        // Rate limiting with arcjet
        const req = await request()

        const decision = await aj.protect(req, {
            requested: 1,
        });
        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                const {remaining, reset} = decision.reason;

                console.error({
                    code: "RATE_LIMIT_EXCEEDED",
                    details: {
                        remaining,
                        resetInSeconds: reset,
                    }
                });
                throw new Error("Too many requests. Please try again later.")
            }
            throw new Error("Request Blocked");
        }

         // check if gemini api is available or not
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("Gemini API is not configured properly")
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
                const base64Image = await fileToBase64(file);
        
                const imagePart = {
                    inlineData: {
                        data: base64Image,
                        mimeType: file.type,
                    },
                };
        
                const prompt = ` Analyze this car image and extract the following information for a search query:
      1. Make (manufacturer)
      2. Body type (SUV, Sedan, Hatchback, etc.)
      3. Color

      Format your response as a clean JSON object with these fields:
      {
        "make": "",
        "bodyType": "",
        "color": "",
        "confidence": 0.0
      }

      For confidence, provide a value between 0 and 1 representing how confident you are in your overall identification.
      Only respond with the JSON object, nothing else.
      `;
        
                const result = await model.generateContent([imagePart, prompt]);
                const response = await result.response;
                const text = response.text();
                const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

                try {
                    const carDetails = JSON.parse(cleanedText)

                    return {
                        success: true,
                        data: carDetails
                    }
                } catch (error) {
                    console.error("Failed to parse AI response:", parseError);
                    return {
                        success: false,
                        error: "Failed to parse AI response."
                    }
                }

    } catch (error) {
        throw new Error("AI search error:" + error.message);        
    }
}