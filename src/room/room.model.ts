import {
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from 'sequelize-typescript';
// import { RoomUser } from '../room-user/room-user.model';

export class Room extends Model<Room> {
  @Column({})
  name: string;

  @Column({})
  description: string;

  @CreatedAt
  @Column({})
  createdAt: Date;

  @UpdatedAt
  @Column({})
  updatedAt: Date;

  // @HasMany(() => RoomUser)
  // roomUsers: RoomUser[];
}
