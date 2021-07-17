import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTabViewComponent } from './vertical-tab-view.component';

describe('VerticalTabViewComponent', () => {
  let component: VerticalTabViewComponent;
  let fixture: ComponentFixture<VerticalTabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalTabViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
