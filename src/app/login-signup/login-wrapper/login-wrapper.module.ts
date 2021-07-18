import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginWrapperComponent } from './login-wrapper.component';
import { FooterSocialMediaHandlesModule } from 'src/app/footer/footer-social-media-handles/footer-social-media-handles.module';
import { GoogleAuthorizationModule } from 'src/app/google-authorization/google-authorization.module';

@NgModule({
  declarations: [
    LoginWrapperComponent
  ],
  imports: [
    CommonModule,
    FooterSocialMediaHandlesModule,
    GoogleAuthorizationModule
  ],
  exports: [
    LoginWrapperComponent
  ]
})
export class LoginWrapperModule { }
