import { CreateRoomUserDto } from './dto/create-room-user.dto';
import { RoomUserDto } from './dto/room-user.dto';
import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';

import { RoomUser } from './room-user.model';
import { Room } from '../room/room.model';
import { User } from '../user/user.model';

@Injectable()
export class RoomUserService {
  constructor(
    @Inject('RoomsRepository')
    private readonly roomsRepository: typeof Room,
    @Inject('UsersRepository')
    private readonly usersRepository: typeof User,
  ) {}

  async create(createRoomUserDto: CreateRoomUserDto) {
    try {
      const room = await this.roomsRepository.findOne({
        where: {
          id: createRoomUserDto.RoomId,
        },
      });

      if (!room) {
        throw new HttpException(
          'No room found for RoomId',
          HttpStatus.BAD_REQUEST,
        );
      }
      const user = await this.usersRepository.findOne({
        where: {
          id: createRoomUserDto.UserId,
        },
      });

      if (!user) {
        throw new HttpException(
          'No user found for UserId',
          HttpStatus.BAD_REQUEST,
        );
      }

      const roomUser = new RoomUser();
      roomUser.RoomId = createRoomUserDto.RoomId;
      roomUser.UserId = createRoomUserDto.UserId;

      const roomUserData = await roomUser.save();

      return new RoomUserDto(roomUserData);
    } catch (err) {
      if (err?.parent?.constraint == 'userid_roomid_unique') {
        throw new HttpException(
          'User already added to the room',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (err.status == 400) {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
