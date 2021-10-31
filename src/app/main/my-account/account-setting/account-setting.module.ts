import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingComponent } from './account-setting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountSettingService } from 'src/app/service/api/account-setting.service';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    AccountSettingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    AccountSettingComponent
  ],
  providers: [
    AccountSettingService
  ]
})
export class AccountSettingModule { }
