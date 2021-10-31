import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingDetailsComponent } from './billing-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/material.module';


@NgModule({
  declarations: [
    BillingDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    BillingDetailsComponent
  ]
})
export class BillingDetailsModule { }
