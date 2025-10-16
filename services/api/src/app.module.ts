import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { QuoteModule } from './quote/quote.module';
import { QuoteController } from './quote/quote.controller';
import { UserModule } from './user/user.module';
import { PrismaService } from 'prisma/prisma.service';
import { InvoiceModule } from './invoice/invoice.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [UserModule, QuoteModule, UserModule, InvoiceModule, ClientModule],
  controllers: [AppController, UserController, QuoteController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
