import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { GoogleAuthorizationModule } from '../google-authorization/google-authorization.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../service/api/login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, GoogleAuthorizationModule],
  exports: [LoginComponent],
  providers: [LoginService],
})
export class LoginModule {}
