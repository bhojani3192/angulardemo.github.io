import { TestBed } from '@angular/core/testing';

import { PymtmsgService } from './pymtmsg.service';

describe('PymtmsgService', () => {
  let service: PymtmsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PymtmsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
