import { Controller, Get, Body, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }
}
