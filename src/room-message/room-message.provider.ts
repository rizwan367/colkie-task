import { RoomMessage } from './room-message.model';

export const roomMessagesProviders = [
  { provide: 'RoomMessagesRepository', useValue: RoomMessage },
];
