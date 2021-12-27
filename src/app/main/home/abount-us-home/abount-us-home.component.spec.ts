import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbountUsHomeComponent } from './abount-us-home.component';

describe('AbountUsHomeComponent', () => {
  let component: AbountUsHomeComponent;
  let fixture: ComponentFixture<AbountUsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbountUsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbountUsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
