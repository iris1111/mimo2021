import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import loginDto from './login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(loginDto: loginDto) {
    const user = await this.userService.findByLogin(loginDto.login);

    if (user && user.password === loginDto.password) {
      return user;
    }

    throw new NotFoundException();
  }

  login(user: User) {
    const payload = { login: user.login, role: user.role };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
