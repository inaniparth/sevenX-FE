import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupRegistrationsComponent } from './startup-registrations.component';
import { StartupRegistrationsRoutingModule } from './startup-registrations-routing.module';
import { StartupRegistrationsFormModule } from './startup-registrations-form/startup-registrations-form.module';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    StartupRegistrationsComponent
  ],
  imports: [
    CommonModule,
    StartupRegistrationsRoutingModule,
    StartupRegistrationsFormModule,
    SharedModule
  ],
  exports: [
    StartupRegistrationsComponent
  ]
})
export class StartupRegistrationsModule { }
