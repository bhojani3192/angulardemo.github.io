import { TestBed } from '@angular/core/testing';

import { ProductlistresolveService } from './productlistresolve.service';

describe('ProductlistresolveService', () => {
  let service: ProductlistresolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductlistresolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
