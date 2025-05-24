export class Invoice {
  id: number;
  clientId: number;
  items: { name: string; quantity: number; unitPrice: number }[];
  tax: number;
  discounts: number;
  invoiceNumber: string;
}