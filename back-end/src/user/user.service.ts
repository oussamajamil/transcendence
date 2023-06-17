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
    // console.log(count);
    const res = await this.prisma.user.findMany(query);
    // console.log('res', res);
    return {
      totalResults: count,
      results: res,
    };
  }

  @findAllDecorator()
  findOne(id: string, query: findAll) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: query.include || undefined,
    });
  }

  @findAllDecorator()
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

  @findAllDecorator()
  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
