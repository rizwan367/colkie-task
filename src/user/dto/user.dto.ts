import { User } from './../user.model';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  readonly fullName: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.fullName = user.fullName;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
