import { TestBed } from '@angular/core/testing';

import { LazyvalueService } from './lazyvalue.service';

describe('LazyvalueService', () => {
  let service: LazyvalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyvalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
