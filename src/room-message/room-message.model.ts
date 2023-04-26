import {
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import { Room } from '../room/room.model';
import { User } from '../user/user.model';

@Table({
  tableName: 'RoomMessages',
})
export class RoomMessage extends Model<RoomMessage> {
  @ForeignKey(() => Room)
  @Column({})
  RoomId: number;

  @ForeignKey(() => User)
  @Column({})
  UserId: number;

  @Column({})
  message: string;

  @CreatedAt
  @Column({})
  createdAt: Date;

  @UpdatedAt
  @Column({})
  updatedAt: Date;
}
