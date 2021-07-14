import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialUser } from 'angularx-social-login';
import { FormStatus } from '../app-utils';
import { GoogleAuthorizationOpenedFrom } from '../google-authorization/utils';

@Component({
  selector: 'sevenx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  
  signUpForm: FormGroup;

  googleAuthorizationOpenedFrom: GoogleAuthorizationOpenedFrom =
    GoogleAuthorizationOpenedFrom.SIGN_UP;

  constructor(private formBuilder: FormBuilder) {
    this.initSignUpForm();
  }

  ngOnInit(): void {}

  initSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  solialUserHandler(socialUser: SocialUser) {
    console.log(socialUser);
  }

  signUp() {
    if (this.signUpForm && this.signUpForm.status && this.signUpForm.status.toUpperCase() === FormStatus.INVALID.toUpperCase()) {
      return;
    }
  }
  
}
