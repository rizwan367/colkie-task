import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ConfigModule } from '@nestjs/config';

import { User } from './user/user.model';
import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';
import { Room } from './room/room.model';
import { RoomUserModule } from './room-user/room-user.module';
import { RoomUser } from './room-user/room-user.model';
import { RoomMessageModule } from './room-message/room-message.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    UserModule,
    RoomModule,
    RoomUserModule,
    RoomMessageModule,
    ConfigModule.forRoot({
      envFilePath: `${ENV}.env`,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
