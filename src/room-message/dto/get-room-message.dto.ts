import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';

enum GetRoomMessageSortEnum {
  updatedAt = 'updatedAt',
  createdAt = 'createdAt',
}
export class GetRoomMessageDto {
  @ApiProperty({
    description: 'Parameter to sort data.',
    enum: GetRoomMessageSortEnum,
  })
  @IsEnum(GetRoomMessageSortEnum)
  @Optional()
  @IsOptional()
  readonly sortBy: GetRoomMessageSortEnum;
}
