import { LoginTypes } from 'src/app/google-authorization/utils';
import { BasePostModel } from '../base-model/base.model';

export class AddCartPostModel extends BasePostModel {
    packageId: number = null;

    toRemote(data: any) {
        return {
            packageId: data.packageId
        };
    }
}
