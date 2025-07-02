const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Función para construir filtros dinámicos
const construirFiltros = (query) => {
  const {
    nombres, apellidos, dni, grado, telefono, pago, sede
  } = query;

  return {
    ...(nombres && { nombres: { contains: nombres, mode: 'insensitive' } }),
    ...(apellidos && { apellidos: { contains: apellidos, mode: 'insensitive' } }),
    ...(dni && { dni: { contains: dni } }),
    ...(grado && { grado: { contains: grado, mode: 'insensitive' } }),
    ...(telefono && { telefono: { contains: telefono } }),
    ...(pago && { pago: { equals: pago } }),
    ...(sede && { sede: { equals: sede } }),
  };
};

// POST Robo Kids
router.post('/robokids', async (req, res) => {
  try {
    const { apellidos, nombres, dni, fecha, grado, telefono, pago, sede } = req.body;

    const nueva = await prisma.inscripcionRoboKids.create({
      data: {
        apellidos,
        nombres,
        dni,
        fecha: new Date(fecha),
        grado,
        telefono,
        pago,
        sede
      }
    });

    res.status(201).json(nueva);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar en Robo Kids', detalles: err.message });
  }
});

// POST Robo Juniors
router.post('/robojuniors', async (req, res) => {
  try {
    const { apellidos, nombres, dni, fecha, grado, telefono, pago, sede } = req.body;

    const nueva = await prisma.inscripcionRoboJuniors.create({
      data: {
        apellidos,
        nombres,
        dni,
        fecha: new Date(fecha),
        grado,
        telefono,
        pago,
        sede
      }
    });

    res.status(201).json(nueva);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar en Robo Juniors', detalles: err.message });
  }
});

// GET Robo Kids con filtros
router.get('/robokids', async (req, res) => {
  try {
    const filtros = construirFiltros(req.query);
    const lista = await prisma.inscripcionRoboKids.findMany({ where: filtros });
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener inscripciones Robo Kids' });
  }
});

// GET Robo Juniors con filtros
router.get('/robojuniors', async (req, res) => {
  try {
    const filtros = construirFiltros(req.query);
    const lista = await prisma.inscripcionRoboJuniors.findMany({ where: filtros });
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener inscripciones Robo Juniors' });
  }
});

// PATCH actualizar estado de pago Robo Kids
router.patch('/robokids/:id', async (req, res) => {
  try {
    const { pago } = req.body;
    const actualizado = await prisma.inscripcionRoboKids.update({
      where: { id: parseInt(req.params.id) },
      data: { pago }
    });
    res.json(actualizado);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar inscripción Robo Kids', detalles: err.message });
  }
});

// PATCH actualizar estado de pago Robo Juniors
router.patch('/robojuniors/:id', async (req, res) => {
  try {
    const { pago } = req.body;
    const actualizado = await prisma.inscripcionRoboJuniors.update({
      where: { id: parseInt(req.params.id) },
      data: { pago }
    });
    res.json(actualizado);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar inscripción Robo Juniors', detalles: err.message });
  }
});

module.exports = router;
