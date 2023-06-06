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
import { MemberShipService } from './member-ship.service';
import { CreateMemberShipDto } from './dto/create-member-ship.dto';
import { UpdateMemberShipDto } from './dto/update-member-ship.dto';
import { ApiTags } from '@nestjs/swagger';
import { findAll } from 'src/resources/interfaces/findAlll';

@ApiTags('member-ship')
@Controller('member-ship')
export class MemberShipController {
  constructor(private readonly memberShipService: MemberShipService) {}

  @Post()
  create(@Body() createMemberShipDto: CreateMemberShipDto) {
    return this.memberShipService.create(createMemberShipDto);
  }

  @Get()
  findAll(@Query() query: findAll) {
    return this.memberShipService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query() findAll: findAll) {
    return this.memberShipService.findOne(id, findAll);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMemberShipDto: UpdateMemberShipDto,
  ) {
    return this.memberShipService.update(id, updateMemberShipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberShipService.remove(id);
  }
}
