import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { StartupRegistrationsFormModule } from '../startup-registrations/startup-registrations-form/startup-registrations-form.module';



@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    StartupRegistrationsFormModule
  ]
})
export class ContactUsModule { }
