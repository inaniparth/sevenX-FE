import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderListOrderComponent } from './update-order-list-order.component';

describe('UpdateOrderListOrderComponent', () => {
  let component: UpdateOrderListOrderComponent;
  let fixture: ComponentFixture<UpdateOrderListOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrderListOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrderListOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
