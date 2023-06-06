import { Injectable } from '@nestjs/common';
import { CreateAchievementProgressDto } from './dto/create-achievement-progress.dto';
import { UpdateAchievementProgressDto } from './dto/update-achievement-progress.dto';
import { PrismaService } from 'src/prisma.service';
import { findAll } from 'src/resources/interfaces/findAlll';
import { findAllDecorator } from 'src/resources/decorator';

@Injectable()
export class AchievementProgressService {
  constructor(private prisma: PrismaService) {}

  @findAllDecorator()
  create(createAchievementProgressDto: CreateAchievementProgressDto) {
    return this.prisma.achievementProgress.create({
      data: {
        ...createAchievementProgressDto,
      },
    });
  }

  @findAllDecorator()
  findAll(query: findAll) {
    const totalResults = this.prisma.achievementProgress.count();
    const results = this.prisma.achievementProgress.findMany(query);
    return {
      totalResults,
      results,
    };
  }

  @findAllDecorator()
  findOne(id: string, query: findAll) {
    delete query.orderBy;
    delete query.where;

    return this.prisma.achievementProgress.findUnique({
      where: {
        id,
      },
      include: query.include || undefined,
    });
  }

  @findAllDecorator()
  update(
    id: string,
    updateAchievementProgressDto: UpdateAchievementProgressDto,
  ) {
    return this.prisma.achievementProgress.update({
      where: {
        id,
      },
      data: {
        ...updateAchievementProgressDto,
      },
    });
  }

  @findAllDecorator()
  remove(id: string) {
    return this.prisma.achievementProgress.delete({
      where: {
        id,
      },
    });
  }
}
