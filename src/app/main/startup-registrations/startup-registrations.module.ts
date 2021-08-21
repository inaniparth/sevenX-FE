import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupRegistrationsComponent } from './startup-registrations.component';
import { StartupRegistrationsRoutingModule } from './startup-registrations-routing.module';



@NgModule({
  declarations: [
    StartupRegistrationsComponent
  ],
  imports: [
    CommonModule,
    StartupRegistrationsRoutingModule
  ],
  exports: [
    StartupRegistrationsComponent
  ]
})
export class StartupRegistrationsModule { }
