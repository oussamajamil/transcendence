import { Injectable } from '@nestjs/common';
import { CreateMatchHistoryDto } from './dto/create-match-history.dto';
import { UpdateMatchHistoryDto } from './dto/update-match-history.dto';
import { findAll } from 'src/resources/interfaces/findAlll';
import { PrismaService } from 'src/prisma.service';
import { findAllDecorator } from 'src/resources/decorator';

@Injectable()
export class MatchHistoryService {
  constructor(private prisma: PrismaService) {}
  @findAllDecorator()
  create(createMatchHistoryDto: CreateMatchHistoryDto) {
    return this.prisma.matchHistory.create({
      data: {
        ...createMatchHistoryDto,
      },
    });
  }

  @findAllDecorator()
  findAll(query: findAll) {
    const totalResults = this.prisma.matchHistory.count();
    const results = this.prisma.matchHistory.findMany(query);
    return {
      totalResults,
      results,
    };
  }

  @findAllDecorator()
  findOne(id: string, query: findAll) {
    return this.prisma.matchHistory.findUnique({
      where: {
        id,
      },
      include: query.include || undefined,
    });
  }

  @findAllDecorator()
  update(id: string, updateMatchHistoryDto: UpdateMatchHistoryDto) {
    return this.prisma.matchHistory.update({
      where: {
        id,
      },
      data: {
        ...updateMatchHistoryDto,
      },
    });
  }

  @findAllDecorator()
  remove(id: string) {
    return this.prisma.matchHistory.delete({
      where: {
        id,
      },
    });
  }
}
