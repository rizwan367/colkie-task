import { Test, TestingModule } from '@nestjs/testing';
import { RoomUserController } from './room-user.controller';

describe('RoomUserController', () => {
  let controller: RoomUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomUserController],
    }).compile();

    controller = module.get<RoomUserController>(RoomUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
