import { TestBed } from '@angular/core/testing';

import { GtevalidatorService } from './gtevalidator.service';

describe('GtevalidatorService', () => {
  let service: GtevalidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GtevalidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
