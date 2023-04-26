import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomUserDto {
  @ApiProperty({
    description: 'The id of the room',
  })
  @IsNumber()
  readonly RoomId: number;

  @ApiProperty({
    description: 'The id of the user',
  })
  @IsNumber()
  readonly UserId: number;
}
