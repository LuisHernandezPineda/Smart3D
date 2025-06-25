const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST para Robo Kids
router.post('/robokids', async (req, res) => {
  try {
    const { apellidos, nombres, dni, fecha, grado, telefono, pago } = req.body;

    const nueva = await prisma.inscripcionRoboKids.create({
      data: { apellidos, nombres, dni, fecha: new Date(fecha), grado, telefono, pago },
    });

    res.status(201).json(nueva);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar en Robo Kids', detalles: err.message });
  }
});

// POST para Robo Juniors
router.post('/robojuniors', async (req, res) => {
  try {
    const { apellidos, nombres, dni, fecha, grado, telefono, pago } = req.body;

    const nueva = await prisma.inscripcionRoboJuniors.create({
      data: { apellidos, nombres, dni, fecha: new Date(fecha), grado, telefono, pago },
    });

    res.status(201).json(nueva);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar en Robo Juniors', detalles: err.message });
  }
});

// GET para Robo Kids
router.get('/robokids', async (req, res) => {
  try {
    const lista = await prisma.inscripcionRoboKids.findMany();
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener inscripciones Robo Kids' });
  }
});

// GET para Robo Juniors
router.get('/robojuniors', async (req, res) => {
  try {
    const lista = await prisma.inscripcionRoboJuniors.findMany();
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener inscripciones Robo Juniors' });
  }
});

module.exports = router;
