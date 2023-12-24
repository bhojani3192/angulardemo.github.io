import { TestBed } from '@angular/core/testing';

import { CustompreloadingstrategyService } from './custompreloadingstrategy.service';

describe('CustompreloadingstrategyService', () => {
  let service: CustompreloadingstrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustompreloadingstrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
