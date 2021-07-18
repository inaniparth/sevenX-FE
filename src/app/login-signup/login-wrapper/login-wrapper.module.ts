import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginWrapperComponent } from './login-wrapper.component';
import { FooterSocialMediaHandlesModule } from 'src/app/footer/footer-social-media-handles/footer-social-media-handles.module';



@NgModule({
  declarations: [
    LoginWrapperComponent
  ],
  imports: [
    CommonModule,
    FooterSocialMediaHandlesModule
  ],
  exports: [
    LoginWrapperComponent
  ]
})
export class LoginWrapperModule { }
