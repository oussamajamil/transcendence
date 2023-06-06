import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { PrismaService } from 'src/prisma.service';
import { findAll } from 'src/resources/interfaces/findAlll';
import { findAllDecorator } from 'src/resources/decorator';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}

  @findAllDecorator()
  async create(createMessageDto: CreateMessageDto) {
    try {
      return await this.prisma.message.create({
        data: {
          ...createMessageDto,
        },
      });
    } catch (e) {
      return e;
    }
  }

  @findAllDecorator()
  async findAll(query: findAll) {
    const count = await this.prisma.message.count();
    const res = await this.prisma.message.findMany(query);
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
  async update(id: string, updateMessageDto: UpdateMessageDto) {
    return this.prisma.message.update({
      where: {
        id,
      },
      data: {
        ...updateMessageDto,
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
