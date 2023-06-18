import { Module } from '@nestjs/common';

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
import { MessagesGateway } from './messagesGateway/messages.gateway';
<<<<<<< HEAD
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

=======
import { StrategyModule } from './strategy/strategy.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
>>>>>>> FETCH_HEAD
@Module({
  imports: [
    ConfigModule.forRoot(),
    MulterModule.register({
      dest: './uploads', // Specify the destination directory for uploaded files
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'uploads'),
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
    AuthModule,
  ],
  controllers: [],
  providers: [PrismaService, MessagesGateway],
})
export class AppModule {}
