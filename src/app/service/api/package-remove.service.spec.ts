import { TestBed } from '@angular/core/testing';

import { PackageRemoveService } from './package-remove.service';

describe('PackageRemoveService', () => {
  let service: PackageRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
