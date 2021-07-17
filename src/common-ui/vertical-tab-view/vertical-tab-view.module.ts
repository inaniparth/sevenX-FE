import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTabViewComponent } from './vertical-tab-view.component';
import { MaterialModule } from 'src/shared/material.module';
import { AccountSettingModule } from 'src/app/main/my-account/account-setting/account-setting.module';

@NgModule({
  declarations: [
    VerticalTabViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AccountSettingModule
  ],
  exports: [
    VerticalTabViewComponent
  ]
})
export class VerticalTabViewModule { }
