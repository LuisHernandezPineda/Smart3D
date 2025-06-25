// index.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const inscripcionesRoutes = require('./routes/inscripciones');
app.use('/api/inscripciones', inscripcionesRoutes);

// Ruta raíz para comprobar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('✅ Backend funcionando correctamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🟢 Servidor escuchando en http://localhost:${PORT}`);
});
