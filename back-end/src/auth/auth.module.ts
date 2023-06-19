import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import {AuthStrategy} from '../strategy/auth.strategy';
@Module({
  imports:[PassportModule],
  controllers: [AuthController],
  providers: [AuthService,AuthStrategy],
})
export class AuthModule {}
