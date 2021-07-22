import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingComponent } from './account-setting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/material.module';
import { AccountSettingService } from 'src/app/service/api/account-setting.service';

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
  ],
  providers: [
    AccountSettingService
  ]
})
export class AccountSettingModule { }
