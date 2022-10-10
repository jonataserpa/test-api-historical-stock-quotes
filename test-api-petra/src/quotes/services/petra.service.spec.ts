import { Test, TestingModule } from '@nestjs/testing';
import { PetraService } from './petra.service';

describe('PetraService', () => {
  let service: PetraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetraService],
    }).compile();

    service = module.get<PetraService>(PetraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
