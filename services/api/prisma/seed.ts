/* eslint-disable @typescript-eslint/no-unused-vars */

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // --- 1️⃣ Création d’un utilisateur (le photographe) ---
  const user = await prisma.user.create({
    data: {
      name: 'Thomas Mercier',
      email: 'thomas.mercier@email.com',
      password: 'password', // ⚠️ à remplacer par un vrai hash bcrypt
      phone: '+33 6 12 34 56 78',
      address: '12 Rue de la Lumière, Lyon',
      bio: 'Photographe professionnel spécialisé en portraits, mariages et paysages.',
    },
  });

  // --- 2️⃣ Création de quelques clients ---
  const clients = await prisma.client.createMany({
    data: [
      {
        name: 'Sophie Durant',
        email: 'sophie.durant@example.com',
        phone: '+33 7 89 45 23 10',
        address: 'Paris',
        userId: user.id,
      },
      {
        name: 'Entreprise LumiNova',
        email: 'contact@luminova.fr',
        phone: '+33 4 72 88 90 10',
        address: 'Lyon',
        userId: user.id,
      },
      {
        name: 'Thomas Lefebvre',
        email: 'thomas.lefebvre@example.com',
        phone: '+33 6 78 90 12 34',
        address: 'Marseille',
        userId: user.id,
      },
    ],
  });

  // --- 3️⃣ Création de quelques devis (quotes) ---
  const quote1 = await prisma.quote.create({
    data: {
      title: 'Shooting Mariage Sophie & Marc',
      description:
        'Couverture complète du mariage, retouche et album photo inclus.',
      amount: 1200.0,
      status: 'approved',
      userId: user.id,
      clientId: 1, // Correspond à Sophie Durant
    },
  });

  const quote2 = await prisma.quote.create({
    data: {
      title: 'Portrait professionnel - Thomas Lefebvre',
      description:
        'Shooting en studio avec fond neutre et retouche professionnelle.',
      amount: 250.0,
      status: 'pending',
      userId: user.id,
      clientId: 3, // Thomas Lefebvre
    },
  });

  // --- 4️⃣ Création de quelques factures (invoices) ---
  await prisma.invoice.createMany({
    data: [
      {
        number: 'INV-2025-001',
        amount: 1200.0,
        issuedAt: new Date('2025-01-15'),
        dueDate: new Date('2025-02-15'),
        status: 'paid',
        userId: user.id,
        clientId: 1,
      },
      {
        number: 'INV-2025-002',
        amount: 250.0,
        issuedAt: new Date('2025-03-10'),
        dueDate: new Date('2025-04-10'),
        status: 'unpaid',
        userId: user.id,
        clientId: 3,
      },
    ],
  });

  console.log('✅ Seeding terminé avec succès !');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
