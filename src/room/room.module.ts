import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoomController } from './room.controller';
import { Room } from './room.model';
import { RoomService } from './room.service';
import { DatabaseModule } from '../database/database.module';
import { roomsProviders } from './room.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RoomController],
  providers: [RoomService, ...roomsProviders],
  exports: [RoomService, ...roomsProviders],
})
export class RoomModule {}
