const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configurar CORS para permitir peticiones desde el frontend
app.use(cors({
  origin: [
    "http://localhost:3000",                   // Desarrollo local
    "https://smart3-d.vercel.app"              // Producción en Vercel (ajusta si es distinto)
  ]
}));

app.use(express.json());

// Rutas
const inscripcionesRoutes = require('./routes/inscripciones');
app.use('/api/inscripciones', inscripcionesRoutes);

const docentesRoutes = require('./routes/docentes');
app.use('/api/docentes', docentesRoutes);

const talleresRoutes = require('./routes/talleres');
app.use('/api/talleres', talleresRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const sedeRoutes = require('./routes/sedes');
app.use('/api/sedes', sedeRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('✅ Backend funcionando correctamente');
});

app.listen(PORT, () => {
  console.log(`🟢 Servidor escuchando en http://localhost:${PORT}`);
});
