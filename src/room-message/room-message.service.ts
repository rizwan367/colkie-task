import { CreateRoomMessageDto } from './dto/create-room-message.dto';
import { RoomMessageDto } from './dto/room-message.dto';
import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';

import { RoomMessage } from './room-message.model';
import { GetRoomMessageDto } from './dto/get-room-message.dto';
import { Room } from '../room/room.model';
import { RoomUser } from '../room-user/room-user.model';

@Injectable()
export class RoomMessageService {
  constructor(
    @Inject('RoomMessagesRepository')
    private readonly roomMessagesRepository: typeof RoomMessage,
    @Inject('RoomsRepository')
    private readonly roomsRepository: typeof Room,
    @Inject('RoomUsersRepository')
    private readonly roomUsersRepository: typeof RoomUser,
  ) {}

  async create(createRoomMessageDto: CreateRoomMessageDto) {
    try {
      const room = await this.roomsRepository.findOne({
        where: {
          id: createRoomMessageDto.RoomId,
        },
      });

      if (!room) {
        throw new HttpException(
          'No room found for RoomId',
          HttpStatus.BAD_REQUEST,
        );
      }

      const roomUser = await this.roomUsersRepository.findOne({
        where: {
          UserId: createRoomMessageDto.UserId,
          RoomId: createRoomMessageDto.RoomId,
        },
      });

      if (!roomUser) {
        throw new HttpException(
          'User is not added to this room',
          HttpStatus.BAD_REQUEST,
        );
      }

      const roomMessage = new RoomMessage();
      roomMessage.RoomId = createRoomMessageDto.RoomId;
      roomMessage.UserId = createRoomMessageDto.UserId;
      roomMessage.message = createRoomMessageDto.message;

      const roomMessageData = await roomMessage.save();
      return new RoomMessageDto(roomMessageData);
    } catch (err) {
      if (err.status == 400) {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(getRoomMessageDto: GetRoomMessageDto) {
    try {
      let order = [];
      if (getRoomMessageDto.sortBy) {
        order = [[getRoomMessageDto.sortBy, 'DESC']];
      }
      const roomMessages =
        await this.roomMessagesRepository.findAll<RoomMessage>({
          order: order,
        });
      return roomMessages.map((roomMessage) => new RoomMessageDto(roomMessage));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
