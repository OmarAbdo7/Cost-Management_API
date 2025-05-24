import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoiceService {
  private invoices: Invoice[] = [
    { id: 1, clientId: 101, items: [{ name: 'Service A', quantity: 2, unitPrice: 50 }], tax: 10, discounts: 5, invoiceNumber: 'INV001' },
    { id: 2, clientId: 102, items: [{ name: 'Product B', quantity: 1, unitPrice: 100 }], tax: 0, discounts: 0, invoiceNumber: 'INV002' },
  ];

  findAll(): Invoice[] {
    return this.invoices; // Returns dummy invoice data
  }

  create(createInvoiceDto: CreateInvoiceDto): Invoice {
    const newInvoice = { 
      id: this.invoices.length + 1, 
      invoiceNumber: `INV${String(this.invoices.length + 1).padStart(3, '0')}`, 
      ...createInvoiceDto 
    };
    this.invoices.push(newInvoice);
    return newInvoice; // Adds and returns new invoice
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto): Invoice {
    const index = this.invoices.findIndex(invoice => invoice.id === id);
    if (index !== -1) {
      this.invoices[index] = { ...this.invoices[index], ...updateInvoiceDto };
      return this.invoices[index]; // Updates and returns modified invoice
    }
    return null; // Returns null if invoice not found
  }
}