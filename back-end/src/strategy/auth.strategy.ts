import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-42';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, '42') {
  constructor() {
    super({
      clientID: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
      callbackURL: 'YOUR_CALLBACK_URL',
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
    // Here, you can perform custom validation or save the user to the database
    console.log({accessToken, refreshToken, profile});
    
    return profile;
  }
}