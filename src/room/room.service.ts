import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Room } from './room.model';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomDto } from './dto/room.dto';

@Injectable()
export class RoomService {
  constructor(
    @Inject('RoomsRepository')
    private readonly roomsRepository: typeof Room,
  ) {}
  async create(createRoomDto: CreateRoomDto) {
    try {
      const room = new Room();
      room.name = createRoomDto.name;
      room.description = createRoomDto.description;
      const roomData = await room.save();
      return new RoomDto(roomData);
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
