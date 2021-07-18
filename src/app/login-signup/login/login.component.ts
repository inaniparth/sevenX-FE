import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { FormStatus, getFormControlValue } from '../../app-utils';
import { GoogleAuthorizationOpenedFrom, LoginTypes } from '../../google-authorization/utils';
import { LoginService } from '../../service/api/login.service';
import { LocalStorageKeyTypes } from '../../service/local-storage/local-storage-key-types';
import { LocalstorageService } from '../../service/local-storage/localstorageservice.service';
import { LoginGetModel, LoginPostModel } from '../../service/models/login.model';

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
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private localStorageService: LocalstorageService,
    private router: Router
  ) {
    this.initLoginForm();
  }

  ngOnInit() {}

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  changePasswordControlType(passwordControlType: string, passwordInputElement: any) {
    if (passwordInputElement) {
      passwordInputElement.type = passwordControlType;
    }
  }

  solialUserHandler(socialUser: SocialUser) {
    if (socialUser) {
      const loginPostModel = new LoginPostModel().toRemote({
        username: socialUser.email,
        password: null,
        loginType: LoginTypes.GOOGLE,
        socialId: socialUser.id ? parseInt(socialUser.id) : null,
      });
      this.loginRequest(loginPostModel);
    }
  }

  logIn() {
    if (this.loginForm && this.loginForm.status && this.loginForm.status.toUpperCase() === FormStatus.INVALID.toUpperCase()) {
      return;
    } else {
      const loginPostModel = new LoginPostModel().toRemote({
        username: getFormControlValue('email', this.loginForm),
        password: getFormControlValue('password', this.loginForm),
        loginType: LoginTypes.NORMAL
      });
      this.loginRequest(loginPostModel);
    }
  }

  loginRequest(loginPostModel) {
    this.loginService.post(loginPostModel)
      .subscribe((response) => {
        if (response && response.data && response.status === 200) {
          const loginGetModel: LoginGetModel = new LoginGetModel().toLocal(
            response.data
          );
          if (loginGetModel && loginGetModel.jwt) {
            this.localStorageService.setLocalStorage(LocalStorageKeyTypes.TOKEN, [loginGetModel.jwt]);
            this.localStorageService.setLocalStorage(LocalStorageKeyTypes.LOGIN_USER, [loginGetModel.username]);
            this.router.navigate(['my-account']);
          }
        }
      });
  }
}
