import { TestBed } from '@angular/core/testing';

import { PureCounterService } from './pure-counter.service';

describe('PureCounterService', () => {
  let service: PureCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PureCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
