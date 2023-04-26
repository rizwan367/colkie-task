import { Module } from '@nestjs/common';
import { RoomUserController } from './room-user.controller';
import { RoomUserService } from './room-user.service';
import { DatabaseModule } from '../database/database.module';
import { roomUsersProviders } from './room-user.providers';
import { RoomModule } from '../room/room.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [DatabaseModule, RoomModule, UserModule],
  controllers: [RoomUserController],
  providers: [RoomUserService, ...roomUsersProviders],
  exports: [RoomUserService, ...roomUsersProviders],
})
export class RoomUserModule {}
