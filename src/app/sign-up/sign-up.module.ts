import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleAuthorizationModule } from '../google-authorization/google-authorization.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, ReactiveFormsModule, GoogleAuthorizationModule],
  exports: [SignUpComponent],
})
export class SignUpModule {}
