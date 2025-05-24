import { Injectable } from '@nestjs/common';
import { CreateCostDto } from './dto/create-cost.dto';
import { Cost } from './entities/cost.entity';

@Injectable()
export class CostService {
  private costs: Cost[] = [
    { id: 1, category: 'Travel', amount: 100, date: '2025-05-01', description: 'Business trip' },
    { id: 2, category: 'Supplies', amount: 50, date: '2025-05-02', description: 'Office supplies' },
  ];

  findAll(): Cost[] {
    return this.costs; // Corrected to return the costs array
  }

  create(createCostDto: CreateCostDto): Cost {
    const newCost = { 
      id: this.costs.length + 1, 
      ...createCostDto 
    };
    this.costs.push(newCost);
    return newCost; // Adds and returns new cost entry
  }
}