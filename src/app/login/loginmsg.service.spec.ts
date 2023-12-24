import { TestBed } from '@angular/core/testing';

import { LoginmsgService } from './loginmsg.service';

describe('LoginmsgService', () => {
  let service: LoginmsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginmsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
