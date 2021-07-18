import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { FormStatus, getFormControlValue } from '../../app-utils';
import { GoogleAuthorizationOpenedFrom, LoginTypes } from '../../google-authorization/utils';
import { SignUpService } from '../../service/api/sign-up.service';
import { LocalStorageKeyTypes } from '../../service/local-storage/local-storage-key-types';
import { LocalstorageService } from '../../service/local-storage/localstorageservice.service';
import { SignUpGetModel, SignUpPostModel } from '../../service/models/sign-up.model';

@Component({
  selector: 'sevenx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  
  signUpForm: FormGroup;

  googleAuthorizationOpenedFrom: GoogleAuthorizationOpenedFrom =
    GoogleAuthorizationOpenedFrom.SIGN_UP;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private router: Router,
    private localStorageService: LocalstorageService
  ) {
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
    if (socialUser) {
      const signUpPostModel = new SignUpPostModel().toRemote({
        username: socialUser.email,
        password: null,
        loginType: LoginTypes.GOOGLE,
        socialId: socialUser.id ? parseInt(socialUser.id) : null,
        firstName: socialUser.firstName,
        lastName: socialUser.lastName,
        phoneNo: null,
        address: null
      });
      this.signUpRequest(signUpPostModel);
    }
  }

  signUp() {
    if (this.signUpForm && this.signUpForm.status && this.signUpForm.status.toUpperCase() === FormStatus.INVALID.toUpperCase()) {
      return;
    } else {
      const signUpPostModel = new SignUpPostModel().toRemote({
        username: getFormControlValue('email', this.signUpForm),
        password: getFormControlValue('password', this.signUpForm),
        loginType: LoginTypes.NORMAL,
        firstName: getFormControlValue('firstName', this.signUpForm),
        lastName: getFormControlValue('lastName', this.signUpForm),
        contactNumber: getFormControlValue('contactNumber', this.signUpForm)
      });
      this.signUpRequest(signUpPostModel);
    }
  }

  signUpRequest(signUpPostModel) {
    this.signUpService.post(signUpPostModel)
      .subscribe((response) => {
        if (response && response.data && response.status === 200) {
          const signUpGetModel: SignUpGetModel = new SignUpGetModel().toLocal(
            response.data
          );
          if (signUpGetModel && signUpGetModel.jwt) {
            this.localStorageService.setLocalStorage(LocalStorageKeyTypes.TOKEN, [signUpGetModel.jwt]);
            this.localStorageService.setLocalStorage(LocalStorageKeyTypes.LOGIN_USER, [signUpGetModel.username]);
            this.router.navigate(['my-account']);
          }
        }
      });
  }
  
}
