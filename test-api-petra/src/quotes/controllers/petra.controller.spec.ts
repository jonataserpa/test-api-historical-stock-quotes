import { Test, TestingModule } from '@nestjs/testing';
import { PetraService } from '../services/petra.service';
import { PetraController } from './petra.controller';

describe('PetraController', () => {
  let controller: PetraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetraController],
      providers: [PetraService],
    }).compile();

    controller = module.get<PetraController>(PetraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
