import { TestBed } from '@angular/core/testing';

import { DeactivateguardService } from './deactivateguard.service';

describe('DeactivateguardService', () => {
  let service: DeactivateguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeactivateguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
