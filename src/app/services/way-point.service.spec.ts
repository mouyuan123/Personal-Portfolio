import { TestBed } from '@angular/core/testing';

import { WayPointService } from './way-point.service';

describe('WayPointService', () => {
  let service: WayPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WayPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
