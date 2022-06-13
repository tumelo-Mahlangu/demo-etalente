import { TestBed } from '@angular/core/testing';

import { ConfigUnitsService } from './config-units.service';

describe('ConfigUnitsService', () => {
  let service: ConfigUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
