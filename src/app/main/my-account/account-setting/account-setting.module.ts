import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingComponent } from './account-setting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/material.module';

@NgModule({
  declarations: [
    AccountSettingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    AccountSettingComponent
  ]
})
export class AccountSettingModule { }
