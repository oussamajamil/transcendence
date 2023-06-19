import { Module } from '@nestjs/common';
import { RelationService } from './relation.service';
import { RelationController } from './relation.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RelationController],
  providers: [RelationService, PrismaService],
})
export class RelationModule {}
