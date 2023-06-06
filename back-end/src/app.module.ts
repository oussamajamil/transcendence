import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { UserController } from './user/user.controller';
import { RelationModule } from './relation/relation.module';
import { MatchHistoryModule } from './match-history/match-history.module';
import { ChannelModule } from './channel/channel.module';
import { MemberShipModule } from './member-ship/member-ship.module';
import { MessageModule } from './message/message.module';
import { AchievementModule } from './achievement/achievement.module';
import { AchievementProgressModule } from './achievement-progress/achievement-progress.module';
import { RankModule } from './rank/rank.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads', // Specify the destination directory for uploaded files
    }),
    UserModule,
    RelationModule,
    MatchHistoryModule,
    ChannelModule,
    MemberShipModule,
    MessageModule,
    MemberShipModule,
    AchievementModule,
    AchievementProgressModule,
    RankModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
