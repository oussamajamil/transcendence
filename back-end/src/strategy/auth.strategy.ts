import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-42';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, 'inta42') {
  constructor() {
    super({
      clientID: 'u-s4t2ud-5c48f31801a9f617ed1429f64263480d6b8e7a81dd75c844015597a54cd02952',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/profile',
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
    console.log("i am here");
    // Here, you can perform custom validation or save the user to the database
    console.log({accessToken, refreshToken, profile});
    
    return profile;
  }
}