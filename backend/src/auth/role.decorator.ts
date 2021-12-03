import { SetMetadata } from '@nestjs/common';
import { UserRoles } from 'src/user/user.entity';

export const Roles = (...roles: UserRoles[]) => SetMetadata('roles', roles);
