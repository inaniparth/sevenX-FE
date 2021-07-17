import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleAuthorizationModule } from '../google-authorization/google-authorization.module';
import { SignUpService } from '../service/api/sign-up.service';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, ReactiveFormsModule, GoogleAuthorizationModule],
  exports: [SignUpComponent],
  providers: [SignUpService]
})
export class SignUpModule {}
