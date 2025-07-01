/*
  Warnings:

  - Changed the type of `fechaNacimiento` on the `Docente` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fechaContrato` on the `Docente` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Docente" DROP COLUMN "fechaNacimiento",
ADD COLUMN     "fechaNacimiento" TIMESTAMP(3) NOT NULL,
DROP COLUMN "fechaContrato",
ADD COLUMN     "fechaContrato" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Sede" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "distrito" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sede_pkey" PRIMARY KEY ("id")
);
