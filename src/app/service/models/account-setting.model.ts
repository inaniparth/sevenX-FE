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
    getModel.contactNumber = oGetResponse.phoneNo;
    return getModel;
  }
}

export class AccountSettingPostModel extends BasePostModel {
  password: string = null;
  firstName: string = null;
  lastName: string = null;
  phoneNo: string = null;
  address: string = null;

  toRemote(data: any) {
    this.password = data.newPassword ? data.newPassword : null;
    this.firstName = data.firstName ? data.firstName : null;
    this.lastName = data.lastName ? data.lastName : null;
    this.phoneNo = data.contactNumber ? data.contactNumber : null;
    this.address = data.address ? data.address : null;
    return this;
  }
}
