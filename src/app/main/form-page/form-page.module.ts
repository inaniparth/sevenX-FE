import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';



@NgModule({
  declarations: [
    FormPageComponent
  ],
  imports: [
    CommonModule,
    NgxPageScrollModule
  ]
})
export class FormPageModule { }
