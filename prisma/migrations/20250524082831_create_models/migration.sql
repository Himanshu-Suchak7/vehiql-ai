-- CreateEnum
CREATE TYPE "User_Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Car_Status" AS ENUM ('AVAILABLE', 'UNAVAILABLE', 'SOLD');

-- CreateEnum
CREATE TYPE "Day_Of_Week" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateEnum
CREATE TYPE "Booking_Status" AS ENUM ('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED', 'NO_SHOW');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerk_user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "phone_number" TEXT,
    "profile_picture" TEXT,
    "role" "User_Role" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cars" (
    "id" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "mileage" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "fuel_type" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "body_type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "seating_capacity" INTEGER,
    "status" "Car_Status" NOT NULL DEFAULT 'AVAILABLE',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "images" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dealership_Info" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dealership_Info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Working_Hours" (
    "id" TEXT NOT NULL,
    "dealership_id" TEXT NOT NULL,
    "day_of_week" "Day_Of_Week" NOT NULL,
    "open_time" TEXT NOT NULL,
    "close_time" TEXT NOT NULL,
    "is_open" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Working_Hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Saved_Cars" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "car_id" TEXT NOT NULL,
    "saved_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Saved_Cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test_Drive_Booking" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "car_id" TEXT NOT NULL,
    "booking_date" DATE NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "status" "Booking_Status" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Test_Drive_Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerk_user_id_key" ON "User"("clerk_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Cars_make_model_idx" ON "Cars"("make", "model");

-- CreateIndex
CREATE INDEX "Cars_body_type_idx" ON "Cars"("body_type");

-- CreateIndex
CREATE INDEX "Cars_price_idx" ON "Cars"("price");

-- CreateIndex
CREATE INDEX "Cars_year_idx" ON "Cars"("year");

-- CreateIndex
CREATE INDEX "Cars_status_idx" ON "Cars"("status");

-- CreateIndex
CREATE INDEX "Cars_fuel_type_idx" ON "Cars"("fuel_type");

-- CreateIndex
CREATE INDEX "Cars_featured_idx" ON "Cars"("featured");

-- CreateIndex
CREATE INDEX "Working_Hours_dealership_id_idx" ON "Working_Hours"("dealership_id");

-- CreateIndex
CREATE INDEX "Working_Hours_day_of_week_idx" ON "Working_Hours"("day_of_week");

-- CreateIndex
CREATE INDEX "Working_Hours_is_open_idx" ON "Working_Hours"("is_open");

-- CreateIndex
CREATE UNIQUE INDEX "Working_Hours_dealership_id_day_of_week_key" ON "Working_Hours"("dealership_id", "day_of_week");

-- CreateIndex
CREATE INDEX "Saved_Cars_user_id_idx" ON "Saved_Cars"("user_id");

-- CreateIndex
CREATE INDEX "Saved_Cars_car_id_idx" ON "Saved_Cars"("car_id");

-- CreateIndex
CREATE UNIQUE INDEX "Saved_Cars_user_id_car_id_key" ON "Saved_Cars"("user_id", "car_id");

-- CreateIndex
CREATE INDEX "Test_Drive_Booking_car_id_idx" ON "Test_Drive_Booking"("car_id");

-- CreateIndex
CREATE INDEX "Test_Drive_Booking_user_id_idx" ON "Test_Drive_Booking"("user_id");

-- CreateIndex
CREATE INDEX "Test_Drive_Booking_booking_date_idx" ON "Test_Drive_Booking"("booking_date");

-- CreateIndex
CREATE INDEX "Test_Drive_Booking_status_idx" ON "Test_Drive_Booking"("status");

-- AddForeignKey
ALTER TABLE "Working_Hours" ADD CONSTRAINT "Working_Hours_dealership_id_fkey" FOREIGN KEY ("dealership_id") REFERENCES "Dealership_Info"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Saved_Cars" ADD CONSTRAINT "Saved_Cars_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Saved_Cars" ADD CONSTRAINT "Saved_Cars_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Cars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Test_Drive_Booking" ADD CONSTRAINT "Test_Drive_Booking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Test_Drive_Booking" ADD CONSTRAINT "Test_Drive_Booking_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Cars"("id") ON DELETE CASCADE ON UPDATE CASCADE;
