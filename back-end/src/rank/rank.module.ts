import { Module } from '@nestjs/common';
import { RankService } from './rank.service';
import { RankController } from './rank.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RankController],
  providers: [RankService, PrismaService],
})
export class RankModule {}
