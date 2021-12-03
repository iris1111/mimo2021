import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import loginDto from './login.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'login',
    });
  }

  async validate(loginDto: loginDto): Promise<User> {
    return await this.authService.validateUser(loginDto);
  }
}
