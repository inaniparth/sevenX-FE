import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { SharedModule } from 'src/shared/shared.module';
import { AccountSettingModule } from 'src/app/main/my-account/account-setting/account-setting.module';
import { UploadDocumentsModule } from './upload-documents/upload-documents.module';
import { MyDocumentsModule } from './my-documents/my-documents.module';
import { MyOrdersModule } from './my-orders/my-orders.module';

@NgModule({
  declarations: [
    MyAccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountSettingModule,
    UploadDocumentsModule,
    MyDocumentsModule,
    MyOrdersModule
  ],
  exports: [
    MyAccountComponent
  ]
})
export class MyAccountModule { }
