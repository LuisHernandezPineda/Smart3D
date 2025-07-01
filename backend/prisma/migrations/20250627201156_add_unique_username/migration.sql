/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Docente` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Docente_username_key" ON "Docente"("username");
