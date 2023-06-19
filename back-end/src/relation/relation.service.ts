import { Injectable } from '@nestjs/common';
import { CreateRelationDto } from './dto/create-relation.dto';
import { UpdateRelationDto } from './dto/update-relation.dto';
import { PrismaService } from 'src/prisma.service';
import { findAll } from 'src/resources/interfaces/findAlll';
import { findAllDecorator } from 'src/resources/decorator';

@Injectable()
export class RelationService {
  constructor(private prisma: PrismaService) {}
  @findAllDecorator()
  create(createRelationDto: CreateRelationDto) {
    return this.prisma.relation.create({
      data: {
        ...createRelationDto,
      },
    });
  }

  @findAllDecorator()
  findAll(query: findAll) {
    const totalResults = this.prisma.relation.count();
    const results = this.prisma.relation.findMany(query);
    return {
      totalResults: +totalResults || 0,
      results,
    };
  }

  @findAllDecorator()
  findOne(id: string, query: findAll) {
    delete query.orderBy;
    delete query.where;

    return this.prisma.relation.findUnique({
      where: {
        id,
      },
    });
  }

  @findAllDecorator()
  update(id: string, updateRelationDto: UpdateRelationDto) {
    return this.prisma.relation.update({
      where: {
        id,
      },
      data: {
        ...updateRelationDto,
      },
    });
  }

  @findAllDecorator()
  remove(id: string) {
    return this.prisma.relation.delete({
      where: {
        id,
      },
    });
  }
}
