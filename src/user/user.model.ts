import {
  HasMany,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { RoomUser } from '../room-user/room-user.model';

export class User extends Model<User> {
  @Column({})
  fullName: string;

  @CreatedAt
  @Column({})
  createdAt: Date;

  @UpdatedAt
  @Column({})
  updatedAt: Date;

  @HasMany(() => RoomUser)
  roomUsers: RoomUser[];
}
