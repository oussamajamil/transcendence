import { Injectable } from '@nestjs/common';
import { CreateMemberShipDto } from './dto/create-member-ship.dto';
import { UpdateMemberShipDto } from './dto/update-member-ship.dto';
import { PrismaService } from 'src/prisma.service';
import { findAll } from 'src/resources/interfaces/findAlll';
import { findAllDecorator } from 'src/resources/decorator';

@Injectable()
export class MemberShipService {
  constructor(private prisma: PrismaService) {}

  @findAllDecorator()
  async create(createMemberShipDto: CreateMemberShipDto) {
    try {
      return await this.prisma.membership.create({
        data: {
          ...createMemberShipDto,
        },
      });
    } catch (e) {
      return e;
    }
  }

  @findAllDecorator()
  async findAll(query: findAll) {
    const count = await this.prisma.membership.count();
    const res = await this.prisma.membership.findMany(query);
    return {
      totalResults: count,
      results: res,
    };
  }


  @findAllDecorator()
  async findOne(id: string, query: findAll) {
    return this.prisma.message.findUnique({
      where: {
        id,
      },
      include: query.include || undefined,
    });
  }

  @findAllDecorator()
  async update(id: string, updateMemberShipDto: UpdateMemberShipDto) {
    return this.prisma.message.update({
      where: {
        id,
      },
      data: {
        ...updateMemberShipDto,
      },
    });
  }

  @findAllDecorator()
  async remove(id: string) {
    return this.prisma.message.delete({
      where: {
        id,
      },
    });
  }
}
