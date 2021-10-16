import { BaseGetModel } from "../base-model/base.model";
import { PackagesListGetModel } from "./packages-list.model";

export class CartDetailsGetModel extends BaseGetModel {

    finalOrderTotal: number = null;
    gstAmount: number = null;
    orderTotal: number = null;
    subTotal: number = null;
    userId: number = null;
    packagesList: PackagesListGetModel[] = [];

    toLocal(oGetResponse: any) {
        const getModel: CartDetailsGetModel = Object.assign(new CartDetailsGetModel(), oGetResponse);
        return getModel;
    }
}