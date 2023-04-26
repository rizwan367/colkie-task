import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RoomModule } from '../room/room.module';

import { RoomMessageController } from './room-message.controller';
import { RoomMessageService } from './room-message.service';
import { roomMessagesProviders } from './room-message.provider';
import { RoomUserModule } from '../room-user/room-user.module';

@Module({
  imports: [DatabaseModule, RoomModule, RoomUserModule],
  controllers: [RoomMessageController],
  providers: [RoomMessageService, ...roomMessagesProviders],
  exports: [RoomMessageService, ...roomMessagesProviders],
})
export class RoomMessageModule {}
