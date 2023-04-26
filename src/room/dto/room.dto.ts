import { Room } from '../room.model';
import { ApiProperty } from '@nestjs/swagger';

export class RoomDto {
  constructor(room: Room) {
    this.id = room.id;
    this.name = room.name;
    this.description = room.description;
    this.createdAt = room.createdAt;
    this.updatedAt = room.updatedAt;
  }

  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;
}
