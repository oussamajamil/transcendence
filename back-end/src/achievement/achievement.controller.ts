import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { ApiTags } from '@nestjs/swagger';
import { findAll } from 'src/resources/interfaces/findAlll';

@ApiTags('achievement')
@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Post()
  create(@Body() createAchievementDto: CreateAchievementDto) {
    return this.achievementService.create(createAchievementDto);
  }

  @Get()
  findAll(@Query() query: findAll) {
    return this.achievementService.findAll(query);
  }

  @Get(':id')
  findOne(@Query() query: findAll, @Param('id') id: string) {
    return this.achievementService.findOne(id, query);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAchievementDto: UpdateAchievementDto,
  ) {
    return this.achievementService.update(id, updateAchievementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.achievementService.remove(id);
  }
}
