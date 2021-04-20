import { Test, TestingModule } from '@nestjs/testing';
import { LibModulesService } from './lib-modules.service';

describe('LibModulesService', () => {
  let service: LibModulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibModulesService],
    }).compile();

    service = module.get<LibModulesService>(LibModulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
