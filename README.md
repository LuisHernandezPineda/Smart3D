# 🚀 Smart3D

**Smart3D** es una plataforma educativa que permite gestionar talleres tecnológicos para niños, como **Robo Kids** y **Robo Juniors**, ofreciendo tanto un sitio web informativo como un sistema administrativo completo.

## 📁 Estructura del Proyecto

Smart3D/
├── frontend/ # Aplicación web en React (interfaz pública y panel administrativo)
├── backend/ # API REST en Node.js con Express y Prisma (conexión a PostgreSQL)

---

## 🧰 Tecnologías Utilizadas

### Frontend (React)
- React JS
- Axios
- CSS personalizado
- React Router
- Vite

### Backend (Node.js)
- Express JS
- Prisma ORM
- PostgreSQL
- CORS
- Nodemon

---

## 🔧 Instalación y Ejecución Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/LuisHernandezPineda/Smart3D.git
cd Smart3D

2. Backend (API)
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init  # Solo si aún no migraste
npm run dev

3. Frontend
cd ../frontend
npm install
npm run dev

📦 Estructura de Base de Datos
model InscripcionRoboKids {
  id        Int      @id @default(autoincrement())
  apellidos String
  nombres   String
  dni       String
  fecha     DateTime
  grado     String
  telefono  String
  pago      String
}

model InscripcionRoboJuniors {
  id        Int      @id @default(autoincrement())
  apellidos String
  nombres   String
  dni       String
  fecha     DateTime
  grado     String
  telefono  String
  pago      String
}
