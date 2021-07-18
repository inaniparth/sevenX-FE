import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpService } from '../../service/api/sign-up.service';
import { LoginWrapperModule } from '../login-wrapper/login-wrapper.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    LoginWrapperModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    SignUpComponent
  ],
  providers: [
    SignUpService
  ]
})
export class SignUpModule {}
