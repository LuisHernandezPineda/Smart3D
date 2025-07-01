-- CreateTable
CREATE TABLE "Taller" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "informacion" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Taller_pkey" PRIMARY KEY ("id")
);
