import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page.component';
// import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FormPageDataService } from './form-page-data.service';
import { StartupRegistrationsFormModule } from '../startup-registrations/startup-registrations-form/startup-registrations-form.module';
import { PlansModule } from '../home/plans/plans.module';
import { GetPackagesService } from 'src/app/service/api/get-packages.service';
import { ComingSoonModule } from 'src/common-ui/coming-soon/coming-soon.module';



@NgModule({
  declarations: [
    FormPageComponent
  ],
  imports: [
    CommonModule,
    StartupRegistrationsFormModule,
    PlansModule,
    ComingSoonModule
    // NgxPageScrollModule
  ],
  exports: [
    FormPageComponent
  ],
  providers: [
    FormPageDataService,
    GetPackagesService
  ]
})
export class FormPageModule { }
