import { ApiProperty } from '@nestjs/swagger';
import { RoomMessage } from '../room-message.model';

export class RoomMessageDto {
  constructor(roomMessage: RoomMessage) {
    this.id = roomMessage.id;
    this.RoomId = roomMessage.RoomId;
    this.UserId = roomMessage.UserId;
    this.message = roomMessage.message;
    this.createdAt = roomMessage.createdAt;
    this.updatedAt = roomMessage.updatedAt;
  }
  @ApiProperty({})
  readonly id: number;

  @ApiProperty({})
  readonly RoomId: number;

  @ApiProperty({})
  readonly UserId: number;

  @ApiProperty({})
  readonly message: string;

  @ApiProperty({})
  readonly createdAt: Date;

  @ApiProperty({})
  readonly updatedAt: Date;
}
