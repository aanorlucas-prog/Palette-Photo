import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { QuoteModule } from './quote/quote.module';
import { QuoteController } from './quote/quote.controller';
import { UserModule } from './user/user.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [UserModule, QuoteModule, UserModule],
  controllers: [AppController, UserController, QuoteController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
