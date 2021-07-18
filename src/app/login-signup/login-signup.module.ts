import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginWrapperModule } from './login-wrapper/login-wrapper.module';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './sign-up/sign-up.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginWrapperModule,
    LoginModule,
    SignUpModule
  ],
  exports: [
    LoginWrapperModule,
    LoginModule,
    SignUpModule
  ]
})
export class LoginSignupModule { }
