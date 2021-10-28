import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignupDialogComponent } from './login-signup-dialog.component';
import { LoginModule } from '../login/login.module';
import { SignUpModule } from '../sign-up/sign-up.module';



@NgModule({
  declarations: [
    LoginSignupDialogComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    SignUpModule
  ],
  exports: [
    LoginSignupDialogComponent
  ]
})
export class LoginSignupDialogModule { }
