import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return { message: 'ERP Cost Management API is running please use /cost /invoice' };
  }
} 