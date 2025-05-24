import { Module } from '@nestjs/common';
import { CostController } from './cost.controller';
import { CostService } from './cost.service';

@Module({
  controllers: [CostController], // Registers the controller
  providers: [CostService], // Registers the service
})
export class CostModule {}