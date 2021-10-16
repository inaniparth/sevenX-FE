import { LoginTypes } from 'src/app/google-authorization/utils';
import { BasePostModel } from '../base-model/base.model';

export class AddCartPostModel extends BasePostModel {
    subTotal: number = null;
    gstAmount: number = null;
    orderTotal: number = null;
    packagesList: number[] = [];

    toRemote(data: any) {
        return {
            subTotal: data.subTotal,
            gstAmount: data.gstAmount,
            orderTotal: data.orderTotal,
            packagesList: data.packagesList
        };
    }
}
