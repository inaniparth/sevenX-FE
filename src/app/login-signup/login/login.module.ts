import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { GoogleAuthorizationModule } from '../../google-authorization/google-authorization.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../service/api/login.service';
import { LoginWrapperModule } from '../login-wrapper/login-wrapper.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    LoginWrapperModule,
    GoogleAuthorizationModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ],
})
export class LoginModule {}
