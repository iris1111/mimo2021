import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { Roles } from './auth/role.decorator';
import { UserRoles } from './user/user.entity';
import { RoleGuard } from './auth/guards/role.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(JwtAuthGuard, RoleGuard)
  // @Roles(UserRoles.USER)
  @Get()
  getHello(): Array<Object> {
    return [
      {
        id: 1,
        name: 'John',
        role: 'USER',
      },
      {
        id: 2,
        name: 'Irinaa',
        role: 'ADMIN',
      },
    ];
  }
}
