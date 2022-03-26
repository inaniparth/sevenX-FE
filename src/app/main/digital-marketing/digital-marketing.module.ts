import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalMarketingComponent } from './digital-marketing.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    DigitalMarketingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DigitalMarketingModule { }
