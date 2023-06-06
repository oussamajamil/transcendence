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
import { AchievementProgressService } from './achievement-progress.service';
import { CreateAchievementProgressDto } from './dto/create-achievement-progress.dto';
import { UpdateAchievementProgressDto } from './dto/update-achievement-progress.dto';
import { ApiTags } from '@nestjs/swagger';
import { findAll } from 'src/resources/interfaces/findAlll';
import { query } from 'express';

@ApiTags('achievement-progress')
@Controller('achievement-progress')
export class AchievementProgressController {
  constructor(
    private readonly achievementProgressService: AchievementProgressService,
  ) {}

  @Post()
  create(@Body() createAchievementProgressDto: CreateAchievementProgressDto) {
    return this.achievementProgressService.create(createAchievementProgressDto);
  }

  @Get()
  findAll(@Query() query: findAll) {
    return this.achievementProgressService.findAll(query);
  }

  @Get(':id')
  findOne(@Query() query: findAll, @Param('id') id: string) {
    return this.achievementProgressService.findOne(id, query);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAchievementProgressDto: UpdateAchievementProgressDto,
  ) {
    return this.achievementProgressService.update(
      id,
      updateAchievementProgressDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.achievementProgressService.remove(id);
  }
}
