import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { ReminderService } from '../reminder/reminder.service';
import { TaxService } from '../tax/tax.service';

@Module({
  controllers: [InvoiceController], // Registers the controller
  providers: [InvoiceService, ReminderService, TaxService], // Registers the services
})
export class InvoiceModule {}