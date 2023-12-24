import { TestBed } from '@angular/core/testing';

import { GteService } from './gte.service';

describe('GteService', () => {
  let service: GteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
