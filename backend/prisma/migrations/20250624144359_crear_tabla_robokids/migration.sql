-- CreateTable
CREATE TABLE "InscripcionRoboKids" (
    "id" SERIAL NOT NULL,
    "apellidos" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "grado" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "pago" TEXT NOT NULL,

    CONSTRAINT "InscripcionRoboKids_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InscripcionRoboJuniors" (
    "id" SERIAL NOT NULL,
    "apellidos" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "grado" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "pago" TEXT NOT NULL,

    CONSTRAINT "InscripcionRoboJuniors_pkey" PRIMARY KEY ("id")
);
