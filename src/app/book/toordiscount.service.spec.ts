import { TestBed } from '@angular/core/testing';

import { ToordiscountService } from './toordiscount.service';

describe('ToordiscountService', () => {
  let service: ToordiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToordiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
