import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindACoFounderComponent } from './find-a-co-founder.component';

describe('FindACoFounderComponent', () => {
  let component: FindACoFounderComponent;
  let fixture: ComponentFixture<FindACoFounderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindACoFounderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindACoFounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
