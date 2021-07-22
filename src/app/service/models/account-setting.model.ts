import { LoginTypes, UserRoles } from 'src/app/google-authorization/utils';
import { BaseGetModel, BasePostModel } from '../base-model/base.model';

export class AccountSettingGetModel extends BaseGetModel {
  address: string = null;
  firstName: string = null;
  id: number = null;
  jwt: string = null;
  lastName: string = null;
  loginType: string = null;
  phoneNo: number = null;
  role: UserRoles = null;
  socialId: string = null;
  username: string = null;

  toLocal(oGetResponse: any) {
    const getModel = Object.assign(new AccountSettingGetModel(), oGetResponse);
    getModel.email = oGetResponse.username;
    return getModel;
  }
}

export class LoginPostModel extends BasePostModel {
  username: string = '';
  password: string = '';
  loginType: LoginTypes = null;
  socialId: number = null;

  toRemote(data: any) {
    return {
      username: data.username,
      password: data.password,
      loginType: data.loginType,
      socialId: data.socialId,
    };
  }
}
