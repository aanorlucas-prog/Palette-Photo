import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { ClientsModule } from './clients/clients.module';
import { DevisService } from './devis/devis.service';
import { DevisController } from './devis/devis.controller';
import { DevisModule } from './devis/devis.module';
import { CalendarModule } from './calendar/calendar.module';
import { InvoicesService } from './invoices/invoices.service';
import { InvoicesModule } from './invoices/invoices.module';
import { InvoivesController } from './invoives/invoives.controller';

@Module({
  imports: [ClientsModule, DevisModule, CalendarModule, InvoicesModule],
  controllers: [AppController, ClientsController, DevisController, InvoivesController],
  providers: [AppService, DevisService, InvoicesService],
})
export class AppModule {}
