"use server"
import {auth} from "@clerk/nextjs/server"
import { db } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getDealershipInfo() {
    try {
        const {userId} = await auth();
        if (!userId) throw new Error("Unauthorized");
        const user = await db.user.findUnique({
                    where: { clerk_user_id: userId },
                });
        
        if (!user) throw new Error("User not found");

        // Get Dealership Record
        let dealership = await db.dealership_Info.findFirst({
            include: {
                working_hours: {
                    orderBy: {
                        day_of_week: "asc",
                    }
                }
            }
        })

        if(!dealership) {
            dealership = await db.dealership_Info.create({
                data:{
                    working_hours: {
                        create: [
                            {
                                day_of_week: "MONDAY",
                                open_time: "09:00",
                                close_time: "18:00",
                                is_open: true,
                            },
                            {
                                day_of_week: "TUESDAY",
                                open_time: "09:00",
                                close_time: "18:00",
                                is_open: true,
                            },
                            {
                                day_of_week: "WEDNESDAY",
                                open_time: "09:00",
                                close_time: "18:00",
                                is_open: true,
                            },
                            {
                                day_of_week: "THURSDAY",
                                open_time: "09:00",
                                close_time: "18:00",
                                is_open: true,
                            },
                            {
                                day_of_week: "FRIDAY",
                                open_time: "09:00",
                                close_time: "18:00",
                                is_open: true,
                            },
                            {
                                day_of_week: "SATURDAY",
                                open_time: "09:00",
                                close_time: "16:00",
                                is_open: true,
                            },
                            {
                                day_of_week: "SUNDAY",
                                open_time: "10:00",
                                close_time: "16:00",
                                is_open: true,
                            },
                        ]
                    }
                },
                include: {
                    working_hours:{
                        orderBy:{
                            day_of_week: "asc",
                        }
                    }
                }
            })
        }
        return {
            success: true,
            data: {
                ...dealership,
                created_at: dealership?.created_at.toISOString(),
                updated_at: dealership?.updated_at.toISOString(),
            }
        }
    } catch (error) {
        throw new Error("Error fetching dealership info:" + error.message)
    }
}

export async function saveWorkingHours(workingHours) {
    try {
        const {userId} = await auth();
        if (!userId) throw new Error("Unauthorized");
        const user = await db.user.findUnique({
                    where: { clerk_user_id: userId },
                });
        
        if (!user || user.role !== "ADMIN") {
            throw new Error("Unauthorized: Admin Access Required");
        }
        const dealership = await db.dealership_Info.findFirst();

        if (!dealership) {
            throw new Error("Dealership Not Found");
        }
        // Update working hours - first delete existing hours
        await db.working_Hours.deleteMany({
            where: {dealership_id: dealership.id},
        });

        // Then create new hours
        for(const hour of workingHours){
            await db.working_Hours.create({
                data:{
                    day_of_week: hour.day_of_week,
                    open_time: hour.open_time,
                    close_time: hour.close_time,
                    is_open: hour.is_open,
                    dealership_id: dealership.id,
                }
            })
        }
        revalidatePath("/admin/settings");
        revalidatePath("/");

        return {
            success: true
        }
    } catch (error) {
        throw new Error("Error saving working hours:" + error.message);
    }
}

export async function getUsers() {
    try {
        const {userId} = await auth();
        if (!userId) throw new Error("Unauthorized");
        const user = await db.user.findUnique({
            where: { clerk_user_id: userId },
        });
        if (!user || user.role !== "ADMIN") {
            throw new Error("Unauthorized: Admin Access Required");
        }
        // Get all users
        const users = await db.user.findMany({
            orderBy: {created_at: "desc"}
        });
        return {
            success: true,
            data: users.map((user)=>({
                ...user,
                created_at: user.created_at.toISOString(),
                updated_at: user.updated_at.toISOString(),
            }))
        }
    } catch (error) {
        throw new Error("Error fetching user" + error.message);
    }
}

export async function updateUserRole(userId, role) {
    try {
        const {userId: adminId} = await auth();
        if (!adminId) throw new Error("Unauthorized");
        const user = await db.user.findUnique({
            where: { clerk_user_id: adminId },
        });
        if (!user || user.role !== "ADMIN") {
            throw new Error("Unauthorized: Admin Access Required");
        }
        await db.user.update({
            where: {id: userId},
            data: {role},
        });
        revalidatePath("/admin/settings/");
        return {
            success: true,
        }
    } catch (error) {
        throw new Error("Error Updating user role:" + error.message);
    }
}
