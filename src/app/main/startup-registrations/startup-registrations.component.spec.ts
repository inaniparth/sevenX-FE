import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupRegistrationsComponent } from './startup-registrations.component';

describe('StartupRegistrationsComponent', () => {
  let component: StartupRegistrationsComponent;
  let fixture: ComponentFixture<StartupRegistrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupRegistrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
