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
  state: string = null;

  gstNumber: string = null;
  panNumber: string = null;

  toLocal(oGetResponse: any) {
    const getModel = Object.assign(new AccountSettingGetModel(), oGetResponse);
    getModel.email = oGetResponse.username;
    getModel.contactNumber = oGetResponse.phoneNo;
    return getModel;
  }
}

export class AccountSettingPostModel extends BasePostModel {
  password: string = null;
  newPassword: string = null;
  firstName: string = null;
  lastName: string = null;
  phoneNo: string = null;
  address: string = null;
  state: string = null;

  gstNumber: string = null;
  panNumber: string = null;

  toRemote(data: any) {
    this.password = data.password ? data.password : null;
    this.newPassword = data.newPassword ? data.newPassword : null;
    this.firstName = data.firstName ? data.firstName : null;
    this.lastName = data.lastName ? data.lastName : null;
    this.phoneNo = data.contactNumber ? data.contactNumber : null;
    this.address = data.address ? data.address : null;
    this.state = data.state ? data.state : null;

    this.gstNumber = data.gstNumber ? data.gstNumber : null;
    this.panNumber = data.panNumber ? data.panNumber : null;
    return this;
  }
}
