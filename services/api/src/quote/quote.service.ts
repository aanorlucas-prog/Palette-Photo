/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class QuoteService {
  constructor(private prisma: PrismaService) {}

  // 🆕 Créer un devis
   async create(dto: CreateQuoteDto) {
    // Construis explicitement le data avec connect pour la relation client (si fournie)
    const data: Prisma.QuoteCreateInput = {
      title: dto.title,
      amount: dto.amount,
      description: dto.description ?? undefined,
      status: dto.status ?? undefined,
      ...(dto.clientId
        ? { client: { connect: { id: dto.clientId } } }
        : {}),
      user: {
        create: undefined,
        connectOrCreate: undefined,
        connect: undefined
      }
    };

    return this.prisma.quote.create({ data });
  }


  // 📋 Récupérer tous les devis
  findAll() {
    return this.prisma.quote.findMany({
      include: { client: true }, // si ta table a une relation clientId
    });
  }

  // 🔍 Récupérer un devis par ID
  findOne(id: number) {
    return this.prisma.quote.findUnique({
      where: { id },
      include: { client: true },
    });
  }

  // ✏️ Mettre à jour un devis
  update(id: number, data: UpdateQuoteDto) {
    return this.prisma.quote.update({
      where: { id },
      data,
    });
  }

  // 🗑️ Supprimer un devis
  remove(id: number) {
    return this.prisma.quote.delete({
      where: { id },
    });
  }
}
