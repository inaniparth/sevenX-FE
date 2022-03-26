import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingInvestorAgreementsComponent } from './funding-investor-agreements.component';

describe('FundingInvestorAgreementsComponent', () => {
  let component: FundingInvestorAgreementsComponent;
  let fixture: ComponentFixture<FundingInvestorAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundingInvestorAgreementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingInvestorAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
