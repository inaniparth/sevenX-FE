import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { StartupRegistrationsFormModule } from '../startup-registrations/startup-registrations-form/startup-registrations-form.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    StartupRegistrationsFormModule,
    LottieModule.forRoot({ player: playerFactory }),
  ]
})
export class ContactUsModule { }
