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
import { RelationService } from './relation.service';
import { CreateRelationDto } from './dto/create-relation.dto';
import { UpdateRelationDto } from './dto/update-relation.dto';
import { ApiTags } from '@nestjs/swagger';
import { findAll } from 'src/resources/interfaces/findAlll';

@ApiTags('relations')
@Controller('relations')
export class RelationController {
  constructor(private readonly relationService: RelationService) {}

  @Post()
  create(@Body() createRelationDto: CreateRelationDto) {
    return this.relationService.create(createRelationDto);
  }

  @Get()
  findAll(@Query() query: findAll) {
    return this.relationService.findAll(query);
  }

  @Get(':id')
  findOne(@Query() query: findAll, @Param('id') id: string) {
    return this.relationService.findOne(id, query);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRelationDto: UpdateRelationDto,
  ) {
    return this.relationService.update(id, updateRelationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relationService.remove(id);
  }
}
