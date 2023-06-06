import { Module } from '@nestjs/common';
import { MemberShipService } from './member-ship.service';
import { MemberShipController } from './member-ship.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MemberShipController],
  providers: [MemberShipService, PrismaService],
})
export class MemberShipModule {}
