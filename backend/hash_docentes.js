// hash_docentes.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function hashPasswords() {
  try {
    const docentes = await prisma.docente.findMany();

    for (const docente of docentes) {
      if (!docente.password.startsWith('$2b$')) {
        const hashedPassword = await bcrypt.hash(docente.password, 10);

        await prisma.docente.update({
          where: { id: docente.id },
          data: { password: hashedPassword },
        });

        console.log(`🔐 Contraseña actualizada para: ${docente.username}`);
      }
    }

    console.log('✅ Todas las contraseñas han sido hasheadas.');
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

hashPasswords();
