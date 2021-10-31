import { LoginTypes } from 'src/app/google-authorization/utils';
import { BaseGetModel, BasePostModel } from '../base-model/base.model';

export class StartupRegistrationsFormGetModel extends BaseGetModel {
    name: string = null;
    email: string = null;
    contactNo: number = null;
    state: string = null;
    screenName: string = null;

    toLocal(oGetResponse: any) {
        return Object.assign(new StartupRegistrationsFormGetModel(), oGetResponse);
    }
}

export class StartupRegistrationsFormPostModel extends BasePostModel {
    name: string = null;
    email: string = null;
    contactNo: string = null;
    state: string = null;
    screenName: string = null;

    toRemote(data: any) {
        return {
            name: data.name,
            email: data.email,
            contactNo: data.contactNo,
            state: data.state,
            screenName: data.screenName
        };
    }
}
