/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateInvoiceDto) {
    return this.prisma.invoice.create({
      data: {
        number: data.number,
        issueDate: new Date(data.issueDate),
        dueDate: new Date(data.dueDate),
        amount: data.amount,
        status: data.status ?? 'pending',
        clientId: data.clientId,
        quoteId: data.quoteId,
      },
    });
  }

  findAll() {
    return this.prisma.invoice.findMany({
      include: {
        client: true,
        quote: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: number) {
    return this.prisma.invoice.findUnique({
      where: { id },
      include: { client: true, quote: true },
    });
  }

  update(id: number, data: UpdateInvoiceDto) {
    return this.prisma.invoice.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.invoice.delete({
      where: { id },
    });
  }
}
