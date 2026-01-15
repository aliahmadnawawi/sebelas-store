import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || 'admin@sebelasindonesia.app';
  const password = process.env.ADMIN_PASSWORD || 'admin12345';
  const passwordHash = await bcrypt.hash(password, 10);

  const admin = await prisma.user.upsert({
    where: { email },
    update: { passwordHash, role: Role.ADMIN },
    create: {
      email,
      name: 'Sebelas Admin',
      passwordHash,
      role: Role.ADMIN
    }
  });

  await prisma.store.upsert({
    where: { slug: 'demo-store' },
    update: { ownerId: admin.id },
    create: {
      name: 'Demo Store',
      slug: 'demo-store',
      ownerId: admin.id,
      products: {
        create: [
          { name: 'Starter Bundle', description: 'Welcome bundle for new customers.', price: 129000 },
          { name: 'Premium Pack', description: 'Top sellers and limited editions.', price: 349000 }
        ]
      }
    }
  });
}

main()
  .catch(async (error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
