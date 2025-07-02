/*
  Warnings:

  - Added the required column `sede` to the `InscripcionRoboJuniors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sede` to the `InscripcionRoboKids` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InscripcionRoboJuniors" ADD COLUMN     "sede" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "InscripcionRoboKids" ADD COLUMN     "sede" TEXT NOT NULL;
