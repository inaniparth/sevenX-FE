import { TestBed } from '@angular/core/testing';

import { GetPackagesService } from './get-packages.service';

describe('GetPackagesService', () => {
  let service: GetPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
