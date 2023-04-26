import {
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  Table,
  ForeignKey,
  Index,
} from 'sequelize-typescript';
import { Room } from '../room/room.model';
import { User } from '../user/user.model';

@Table({
  tableName: 'RoomUsers',
})
export class RoomUser extends Model<RoomUser> {
  @Index({
    name: 'userid_roomid_unique',
    unique: true,
  })
  @ForeignKey(() => Room)
  @Column({})
  RoomId: number;

  @Index({
    name: 'userid_roomid_unique',
    unique: true,
  })
  @ForeignKey(() => User)
  @Column({})
  UserId: number;

  @CreatedAt
  @Column({})
  createdAt: Date;

  @UpdatedAt
  @Column({})
  updatedAt: Date;
}
