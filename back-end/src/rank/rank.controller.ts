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
import { RankService } from './rank.service';
import { CreateRankDto } from './dto/create-rank.dto';
import { UpdateRankDto } from './dto/update-rank.dto';
import { findAll } from 'src/resources/interfaces/findAlll';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('rank')
@Controller('rank')
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Post()
  create(@Body() createRankDto: CreateRankDto) {
    return this.rankService.create(createRankDto);
  }

  @Get()
  findAll(@Query() query: findAll) {
    return this.rankService.findAll(query);
  }

  @Get(':id')
  findOne(@Query() query: findAll, @Param('id') id: string) {
    return this.rankService.findOne(id, query);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRankDto: UpdateRankDto) {
    return this.rankService.update(id, updateRankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rankService.remove(id);
  }
}
