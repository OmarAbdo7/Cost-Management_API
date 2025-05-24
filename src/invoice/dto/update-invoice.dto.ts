export class UpdateInvoiceDto {
  items?: { name: string; quantity: number; unitPrice: number }[];
  tax?: number;
  discounts?: number;
}