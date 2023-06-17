import { Injectable, Query } from '@nestjs/common';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { PrismaService } from 'src/prisma.service';
import { findAll } from 'src/resources/interfaces/findAlll';
import { findAllDecorator } from 'src/resources/decorator';

@Injectable()
export class ChannelService {
  constructor(private prisma: PrismaService) {}

  @findAllDecorator()
  create(createChannelDto: CreateChannelDto) {
    return this.prisma.channel.create({
      data: {
        ...createChannelDto,
      },
    });
  }

  @findAllDecorator()
  async findAll(@Query() query: findAll) {
    console.log('i am here1', query);
    const totalResults = await this.prisma.channel.count({
      where: query.where || undefined,
    });
    const results = await this.prisma.channel.findMany(query);
    console.log('i am here2', results);

    return {
      totalResults: +totalResults || 0,
      results,
    };
  }

  @findAllDecorator()
  findOne(id: string, @Query() query: findAll) {
    delete query.orderBy;
    delete query.where;

    return this.prisma.channel.findUnique({
      where: {
        id,
      },
      include: query.include || undefined,
    });
  }

  @findAllDecorator()
  update(id: string, updateChannelDto: UpdateChannelDto) {
    return this.prisma.channel.update({
      where: {
        id,
      },
      data: {
        ...updateChannelDto,
      },
    });
  }

  @findAllDecorator()
  remove(id: string) {
    return this.prisma.channel.delete({
      where: {
        id,
      },
    });
  }

  // async testApi() {
  //   const res = await this.prisma.channel.findMany({
  //     where: {
  //       type: 'DM',
  //       members: {
  //         some: {
  //           user: {
  //             login: 'test',
  //           },
  //         },
  //       },
  //     },
  //     include: {
  //       messages: true,
  //     },
  //   });
  // }
}
