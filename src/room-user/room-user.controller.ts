import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRoomUserDto } from './dto/create-room-user.dto';
import { RoomUserService } from './room-user.service';

@Controller('room-user')
export class RoomUserController {
  constructor(private readonly roomUserService: RoomUserService) {}

  @Post()
  createRoomUser(@Body() createRoomUserDto: CreateRoomUserDto) {
    return this.roomUserService.create(createRoomUserDto);
  }
}
