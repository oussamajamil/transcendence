import { Module } from '@nestjs/common';
import { AchievementProgressService } from './achievement-progress.service';
import { AchievementProgressController } from './achievement-progress.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AchievementProgressController],
  providers: [AchievementProgressService, PrismaService],
})
export class AchievementProgressModule {}
