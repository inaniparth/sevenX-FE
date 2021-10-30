import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginWrapperModule } from './login-wrapper/login-wrapper.module';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { LoginSignupDialogModule } from './login-signup-dialog/login-signup-dialog.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginWrapperModule,
    LoginModule,
    SignUpModule,
    LoginSignupDialogModule
  ],
  exports: [
    LoginWrapperModule,
    LoginModule,
    SignUpModule,
    LoginSignupDialogModule
  ]
})
export class LoginSignupModule { }
