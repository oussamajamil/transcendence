import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('/')
  @UseGuards(AuthGuard('inta42'))
  async authenticate() {
    // console.log('---------------This route is protected by the 42 passport strategy--------------------');
    // This route will trigger the 42 authentication flow
  }

  @Get('/profile')
  @UseGuards(AuthGuard('inta42'))
  async profile() {
    // console.log('---------------This route is protected by the 42 passport strategy--------------------');
    // This route will trigger the 42 authentication flow
  }
}