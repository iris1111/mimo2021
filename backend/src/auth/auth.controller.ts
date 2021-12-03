import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import loginDto from './login.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginDto: loginDto) {
    const user = await this.authService.validateUser(loginDto);
    return this.authService.login(user);
  }
}
