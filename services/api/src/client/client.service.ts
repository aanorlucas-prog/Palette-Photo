import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateClientDto) {
    const data: Prisma.ClientCreateInput = {
      name: dto.name,
      email: dto.email,
      phone: dto.phone ?? null,
      address: dto.address ?? null,
    };
    return this.prisma.client.create({ data });
  }

  findAll() {
    return this.prisma.client.findMany({
      include: {
        quotes: true, // si tu veux voir les devis associés
      },
    });
  }

  findOne(id: number) {
    return this.prisma.client.findUnique({
      where: { id },
      include: {
        quotes: true,
      },
    });
  }

  async update(id: number, dto: UpdateClientDto) {
    const data: Prisma.ClientUpdateInput = {
      name: dto.name ?? undefined,
      email: dto.email ?? undefined,
      phone: dto.phone ?? undefined,
      address: dto.address ?? undefined,
    };
    return this.prisma.client.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.client.delete({ where: { id } });
  }
}
