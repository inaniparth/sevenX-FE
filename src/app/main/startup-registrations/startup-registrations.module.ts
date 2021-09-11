import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupRegistrationsComponent } from './startup-registrations.component';
import { StartupRegistrationsRoutingModule } from './startup-registrations-routing.module';
import { StartupRegistrationsFormModule } from './startup-registrations-form/startup-registrations-form.module';



@NgModule({
  declarations: [
    StartupRegistrationsComponent
  ],
  imports: [
    CommonModule,
    StartupRegistrationsRoutingModule,
    StartupRegistrationsFormModule
  ],
  exports: [
    StartupRegistrationsComponent
  ]
})
export class StartupRegistrationsModule { }
