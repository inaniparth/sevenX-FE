import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../service/api/login.service';
import { LoginWrapperModule } from '../login-wrapper/login-wrapper.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    LoginWrapperModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ],
})
export class LoginModule {}
