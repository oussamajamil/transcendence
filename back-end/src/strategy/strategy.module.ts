import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [PassportModule.register({ defaultStrategy: '42' })],
  controllers: [],
  providers: []
})
export class StrategyModule {}
