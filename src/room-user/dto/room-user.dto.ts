import { ApiProperty } from '@nestjs/swagger';
import { RoomUser } from '../room-user.model';

export class RoomUserDto {
  constructor(roomUser: RoomUser) {
    this.id = roomUser.id;
    this.RoomId = roomUser.RoomId;
    this.UserId = roomUser.UserId;
  }

  @ApiProperty({})
  readonly id: number;

  @ApiProperty({})
  readonly RoomId: number;

  @ApiProperty({})
  readonly UserId: number;
}
