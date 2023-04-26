import { Test, TestingModule } from '@nestjs/testing';
import { RoomMessage } from './room-message';

describe('RoomMessage', () => {
  let provider: RoomMessage;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomMessage],
    }).compile();

    provider = module.get<RoomMessage>(RoomMessage);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
