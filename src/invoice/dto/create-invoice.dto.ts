export class CreateInvoiceDto {
  clientId: number;
  items: { name: string; quantity: number; unitPrice: number }[];
  tax: number;
  discounts: number;
}