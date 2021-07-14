import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import { FormStatus } from '../app-utils';
import { GoogleAuthorizationOpenedFrom } from '../google-authorization/utils';

@Component({
  selector: 'sevenx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  googleAuthorizationOpenedFrom: GoogleAuthorizationOpenedFrom =
    GoogleAuthorizationOpenedFrom.LOGIN;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.initLoginForm();
  }

  ngOnInit() {

  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  solialUserHandler(socialUser: SocialUser) {
    console.log(socialUser);
  }

  logIn() {
    if (this.loginForm && this.loginForm.status && this.loginForm.status.toUpperCase() === FormStatus.INVALID.toUpperCase()) {
      return;
    }
  }
}
