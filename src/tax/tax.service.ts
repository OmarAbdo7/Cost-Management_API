import { Injectable } from '@nestjs/common';
import { TaxCalculationDto } from './dto/tax-calculation.dto';

@Injectable()
export class TaxService {
  calculateTax(taxCalcDto: TaxCalculationDto): { taxAmount: number; updatedTotal: number } {
    const { subtotal, taxRate, region } = taxCalcDto;
    let taxRateValue = 0;
    switch (region.toLowerCase()) {
      case 'us': taxRateValue = 0.10; break; // 10% tax for US
      case 'eu': taxRateValue = 0.20; break; // 20% tax for EU
      default: taxRateValue = 0.05; // 5% default tax
    }
    const taxAmount = subtotal * (taxRate || taxRateValue);
    const updatedTotal = subtotal + taxAmount;
    return { taxAmount, updatedTotal }; // Returns tax amount and updated total
  }
}