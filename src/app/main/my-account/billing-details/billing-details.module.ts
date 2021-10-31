import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingDetailsComponent } from './billing-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    BillingDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    BillingDetailsComponent
  ]
})
export class BillingDetailsModule { }
