import { AchievementStatus } from '@prisma/client';

export class CreateAchievementProgressDto {
  status: AchievementStatus;
  userId: string;
  achievementId: string;
  memberId: string;
  progress: number;
}
