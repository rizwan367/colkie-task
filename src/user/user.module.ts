import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from '../database/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { usersProviders } from './user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
  exports: [UserService, ...usersProviders],
})
export class UserModule {}
