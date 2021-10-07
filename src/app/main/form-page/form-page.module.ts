import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page.component';
// import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FormPageDataService } from './form-page-data.service';
import { StartupRegistrationsFormModule } from '../startup-registrations/startup-registrations-form/startup-registrations-form.module';
import { PlansModule } from '../home/plans/plans.module';



@NgModule({
  declarations: [
    FormPageComponent
  ],
  imports: [
    CommonModule,
    StartupRegistrationsFormModule,
    PlansModule
    // NgxPageScrollModule
  ],
  exports: [
    FormPageComponent
  ],
  providers: [
    FormPageDataService
  ]
})
export class FormPageModule { }
