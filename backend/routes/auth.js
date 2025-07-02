const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar docente por username
    const docente = await prisma.docente.findUnique({
      where: { username },
    });

    if (!docente) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Mostrar en consola para debug
    console.log("Contraseña ingresada:", password);
    console.log("Contraseña almacenada (hash):", docente.password);

    // Comparar contraseña
    const passwordMatch = await bcrypt.compare(password, docente.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Autenticación exitosa
    res.json({
      message: 'Inicio de sesión exitoso',
      docente: {
        id: docente.id,
        username: docente.username,
        rol: docente.rol,
      },
    });

  } catch (error) {
    console.error('ERROR EN LOGIN:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
