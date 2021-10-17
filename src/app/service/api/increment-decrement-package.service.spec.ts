import { TestBed } from '@angular/core/testing';

import { IncrementDecrementPackageService } from './increment-decrement-package.service';

describe('IncrementDecrementPackageService', () => {
  let service: IncrementDecrementPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncrementDecrementPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
