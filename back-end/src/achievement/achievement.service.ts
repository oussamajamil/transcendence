import { Injectable } from '@nestjs/common';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { findAll } from 'src/resources/interfaces/findAlll';
import { PrismaService } from 'src/prisma.service';
import { findAllDecorator } from 'src/resources/decorator';

@Injectable()
export class AchievementService {
  constructor(private prisma: PrismaService) {}
  @findAllDecorator()
  create(createAchievementDto: CreateAchievementDto) {
    return this.prisma.achievement.create({
      data: {
        ...createAchievementDto,
      },
    });
  }

  @findAllDecorator()
  findAll(query: findAll) {
    const totalResults = this.prisma.achievement.count();
    const results = this.prisma.achievement.findMany(query);
    return {
      totalResults,
      results,
    };
  }

  @findAllDecorator()
  findOne(id: string, query: findAll) {
    return this.prisma.achievement.findUnique({
      where: {
        id,
      },
      include: query.include || undefined,
    });
  }

  @findAllDecorator()
  update(id: string, updateAchievementDto: UpdateAchievementDto) {
    return this.prisma.achievement.update({
      where: {
        id,
      },
      data: {
        ...updateAchievementDto,
      },
    });
  }

  @findAllDecorator()
  remove(id: string) {
    return this.prisma.achievement.delete({
      where: {
        id,
      },
    });
  }
}
