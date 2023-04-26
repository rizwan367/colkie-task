import { Room } from './room.model';

export const roomsProviders = [{ provide: 'RoomsRepository', useValue: Room }];
