import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RoomMessageService } from './room-message.service';
import { GetRoomMessageDto } from './dto/get-room-message.dto';
import { CreateRoomMessageDto } from './dto/create-room-message.dto';

@Controller('room-message')
export class RoomMessageController {
  constructor(private readonly roomMessageService: RoomMessageService) {}

  @Post()
  createRoomMessage(@Body() createRoomMessageDto: CreateRoomMessageDto) {
    return this.roomMessageService.create(createRoomMessageDto);
  }

  @Get()
  getRoomMessages(@Query() getRoomMessageDto: GetRoomMessageDto) {
    return this.roomMessageService.findAll(getRoomMessageDto);
  }
}
