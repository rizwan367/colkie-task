import { RoomUser } from './room-user.model';

export const roomUsersProviders = [
  { provide: 'RoomUsersRepository', useValue: RoomUser },
];
