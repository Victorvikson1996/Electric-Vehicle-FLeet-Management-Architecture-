import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { UserService } from './user/user.service';
import { JwtStrategy } from './jwt-strategy/jwt-strategy';
import { User } from './user/user.service';

@Module({
  controllers: [AuthController],
  // providers: [AuthService, UserService, JwtStrategy],
  providers: [AuthService, User, JwtStrategy],
})
export class AuthModule {}
