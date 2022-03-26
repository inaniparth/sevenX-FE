import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundingInvestorAgreementsComponent } from './funding-investor-agreements.component';
import { ComingSoonModule } from 'src/common-ui/coming-soon/coming-soon.module';



@NgModule({
  declarations: [
    FundingInvestorAgreementsComponent
  ],
  imports: [
    CommonModule,
    ComingSoonModule
  ],
  exports: [
    FundingInvestorAgreementsComponent
  ]
})
export class FundingInvestorAgreementsModule { }
