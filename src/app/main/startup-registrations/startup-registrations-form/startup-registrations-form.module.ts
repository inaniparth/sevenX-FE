import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupRegistrationsFormComponent } from './startup-registrations-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GrowlModule } from 'src/common-ui/growl/growl.module';
import { SharedModule } from 'src/shared/shared.module';
import { StartupRegistrationsFormService } from 'src/app/service/api/startup-registrations-form.service';



@NgModule({
  declarations: [
    StartupRegistrationsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    GrowlModule
  ],
  exports: [
    StartupRegistrationsFormComponent
  ],
  providers: [
    StartupRegistrationsFormService
  ]
})
export class StartupRegistrationsFormModule { }
