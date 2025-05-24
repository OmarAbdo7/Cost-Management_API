import { Controller, Get, Post, Body } from '@nestjs/common';
import { CostService } from './cost.service';
import { CreateCostDto } from './dto/create-cost.dto';

@Controller('cost')
export class CostController {
  constructor(private readonly costService: CostService) {}

  @Get()
  findAll() {
    return this.costService.findAll(); // Returns all cost entries
  }

  @Post()
  create(@Body() createCostDto: CreateCostDto) {
    return this.costService.create(createCostDto); // Creates a new cost entry
  }
}