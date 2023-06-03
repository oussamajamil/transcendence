import { Injectable, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { findAll } from 'src/resources/interfaces/findAlll';
import { findAllDecorator } from 'src/resources/decorator';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    try {
      return this.prisma.user.create({
        data: {
          ...createUserDto,
        },
      });
    } catch (e) {
      return e;
    }
  }

  @findAllDecorator()
  async findAll(query: findAll) {
    const count = await this.prisma.user.count();
    const res = await this.prisma.user.findMany(query);
    return {
      totalResults: count,
      results: res,
    };
  }

  findOne(id: string, query: findAll) {
    delete query.orderBy;
    delete query.where;
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...updateUserDto,
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
