import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupValuationsComponent } from './startup-valuations.component';

describe('StartupValuationsComponent', () => {
  let component: StartupValuationsComponent;
  let fixture: ComponentFixture<StartupValuationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupValuationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupValuationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
