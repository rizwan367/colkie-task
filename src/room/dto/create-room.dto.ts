import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Optional } from '@nestjs/common';

export class CreateRoomDto {
  @ApiProperty({
    description: 'The name of the room',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'The description of the room',
  })
  @IsString()
  @Optional()
  readonly description: string;
}
