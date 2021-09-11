import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupRegistrationsFormComponent } from './startup-registrations-form.component';

describe('StartupRegistrationsFormComponent', () => {
  let component: StartupRegistrationsFormComponent;
  let fixture: ComponentFixture<StartupRegistrationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupRegistrationsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupRegistrationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
