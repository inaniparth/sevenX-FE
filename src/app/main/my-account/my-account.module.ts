import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { SharedModule } from 'src/shared/shared.module';
import { FooterModule } from 'src/app/footer/footer.module';



@NgModule({
  declarations: [
    MyAccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FooterModule
  ],
  exports: [
    MyAccountComponent
  ]
})
export class MyAccountModule { }
