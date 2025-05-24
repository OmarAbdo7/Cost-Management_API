import { Module } from '@nestjs/common';
import { CostModule } from './cost/cost.module';
import { InvoiceModule } from './invoice/invoice.module';
import { AppController } from './app.controller';

@Module({
  imports: [CostModule, InvoiceModule], // Imports cost and invoice modules
  controllers: [AppController],
})
export class AppModule {}