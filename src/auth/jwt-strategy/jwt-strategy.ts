/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class JwtStrategy {}

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
// import { AuthService } from './auth.service';
// import { User } from './user.entity';

import { AuthService } from '../auth.service';
import { User } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_secret_key', // Replace with env variable
    });
  }

  async validate(payload: { sub: string; email: string }): Promise<User> {
    const user = await this.authService.validateUser(payload.email, ''); // Add password validation
    if (!user) throw new Error('Invalid token');
    return user;
  }
}
