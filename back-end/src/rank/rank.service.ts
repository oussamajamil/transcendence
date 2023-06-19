import { Injectable } from '@nestjs/common';
import { CreateRankDto } from './dto/create-rank.dto';
import { UpdateRankDto } from './dto/update-rank.dto';
import { findAll } from 'src/resources/interfaces/findAlll';
import { PrismaService } from 'src/prisma.service';
import { findAllDecorator } from 'src/resources/decorator';

@Injectable()
export class RankService {
  constructor(private prisma: PrismaService) {}

  @findAllDecorator()
  create(createRankDto: CreateRankDto) {
    return this.prisma.rank.create({
      data: {
        ...createRankDto,
      },
    });
  }

  @findAllDecorator()
  async findAll(query: findAll) {
    const totalResults = await this.prisma.rank.count();
    const results = await this.prisma.rank.findMany(query);
    return {
      totalResults: totalResults,
      results: results,
    };
  }

  @findAllDecorator()
  findOne(id: string, query: findAll) {
    return this.prisma.rank.findUnique({
      where: {
        id,
      },
      include: query.include || undefined,
    });
  }

  @findAllDecorator()
  update(id: string, updateRankDto: UpdateRankDto) {
    return this.prisma.rank.update({
      where: {
        id,
      },
      data: {
        ...updateRankDto,
      },
    });
  }

  @findAllDecorator()
  remove(id: string) {
    return this.prisma.rank.delete({
      where: {
        id,
      },
    });
  }
}
