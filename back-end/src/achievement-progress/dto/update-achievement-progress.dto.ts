import { PartialType } from '@nestjs/swagger';
import { CreateAchievementProgressDto } from './create-achievement-progress.dto';

export class UpdateAchievementProgressDto extends PartialType(CreateAchievementProgressDto) {}
