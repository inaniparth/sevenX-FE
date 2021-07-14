import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { GoogleAuthorizationOpenedFrom } from '../google-authorization/utils';

@Component({
  selector: 'sevenx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  googleAuthorizationOpenedFrom: GoogleAuthorizationOpenedFrom =
    GoogleAuthorizationOpenedFrom.SIGN_UP;

  constructor() {}

  ngOnInit(): void {}

  solialUserHandler(socialUser: SocialUser) {
    console.log(socialUser);
  }
}
