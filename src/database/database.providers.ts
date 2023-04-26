import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Room } from '../room/room.model';
import { RoomUser } from '../room-user/room-user.model';
import { RoomMessage } from '../room-message/room-message.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(
        `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
        {
          dialectOptions: {
            ssl: {
              rejectUnauthorized: false,
            },
          },
          logging: false,
        },
      );
      sequelize.addModels([User, Room, RoomUser, RoomMessage]);
      return sequelize;
    },
  },
];
