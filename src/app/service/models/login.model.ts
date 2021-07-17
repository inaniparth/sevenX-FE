import { LoginTypes } from 'src/app/google-authorization/utils';
import { BaseGetModel, BasePostModel } from '../base-model/base.model';

export class LoginGetModel extends BaseGetModel {
  jwt: string = null;
  username: string = null;

  toLocal(oGetResponse: any) {
    return Object.assign(new LoginGetModel(), oGetResponse);
  }
}

export class LoginPostModel extends BasePostModel {
  username: string = '';
  password: string = '';
  loginType: LoginTypes = null;

  toRemote(data: any) {
    return {
      username: data.username,
      password: data.password,
      loginType: data.loginType,
    };
  }
}
