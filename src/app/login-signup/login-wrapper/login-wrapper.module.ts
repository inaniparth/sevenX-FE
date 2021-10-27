import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginWrapperComponent } from './login-wrapper.component';
import { FooterSocialMediaHandlesModule } from 'src/app/footer/footer-social-media-handles/footer-social-media-handles.module';
import { GoogleAuthorizationModule } from 'src/app/google-authorization/google-authorization.module';
import { LottieModule } from 'ngx-lottie';
import { playerFactory } from 'src/app/main/home/home.module';

@NgModule({
  declarations: [
    LoginWrapperComponent
  ],
  imports: [
    CommonModule,
    FooterSocialMediaHandlesModule,
    GoogleAuthorizationModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  exports: [
    LoginWrapperComponent
  ]
})
export class LoginWrapperModule { }
