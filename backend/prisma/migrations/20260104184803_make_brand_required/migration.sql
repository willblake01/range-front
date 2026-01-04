/*
  Warnings:

  - Made the column `brand` on table `CartItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `brand` on table `OrderItem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CartItem" ALTER COLUMN "brand" SET NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "brand" SET NOT NULL;
