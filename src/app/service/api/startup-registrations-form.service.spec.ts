import { TestBed } from '@angular/core/testing';

import { StartupRegistrationsFormService } from './startup-registrations-form.service';

describe('StartupRegistrationsFormService', () => {
  let service: StartupRegistrationsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartupRegistrationsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
