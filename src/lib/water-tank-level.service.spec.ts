import { TestBed } from '@angular/core/testing';

import { WaterTankLevelService } from './water-tank-level.service';

describe('WaterTankLevelService', () => {
  let service: WaterTankLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterTankLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
