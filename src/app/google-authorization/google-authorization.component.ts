import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import { GoogleAuthorizationOpenedFrom } from './utils';

@Component({
  selector: 'sevenx-google-authorization',
  templateUrl: './google-authorization.component.html',
  styleUrls: ['./google-authorization.component.scss'],
})
export class GoogleAuthorizationComponent implements OnInit, OnChanges {
  loginForm: FormGroup;

  socialUser: SocialUser;

  @Output()
  eSocialUser: EventEmitter<SocialUser> = new EventEmitter();

  isLoggedin: boolean = false;

  googleLoginOptions = {
    scope: 'profile email',
  };

  @Input()
  googleAuthorizationOpenedFrom: GoogleAuthorizationOpenedFrom =
    GoogleAuthorizationOpenedFrom.LOGIN;

  sevenxGoogleAuthorizationGoogleText: string = 'Sign in with Google';

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit() {
    this.initLoginForm();
    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      this.eSocialUser.emit(user);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('googleAuthorizationOpenedFrom' in changes) {
      this.setSevenxGoogleAuthorizationGoogleText();
    }
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(
      GoogleLoginProvider.PROVIDER_ID,
      this.googleLoginOptions
    );
    // .then((data) => {
    //   console.log(data);
    // })
    // .catch((data) => {
    //   this.socialAuthService.signOut();
    //   console.log('error');
    //   console.log(data);
    // });
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

  setSevenxGoogleAuthorizationGoogleText() {
    if (
      this.googleAuthorizationOpenedFrom &&
      this.googleAuthorizationOpenedFrom.toUpperCase() ===
        GoogleAuthorizationOpenedFrom.SIGN_UP.toUpperCase()
    ) {
      this.sevenxGoogleAuthorizationGoogleText = 'Sign up with Google';
    } else {
      this.sevenxGoogleAuthorizationGoogleText = 'Sign in with Google';
    }
  }
}
