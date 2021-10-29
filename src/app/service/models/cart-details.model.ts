import { BaseGetModel } from "../base-model/base.model";
import { PackagesListGetModel } from "./packages-list.model";

export class CartDetailsGetModel extends BaseGetModel {

    gstAmount: number = null;
    orderTotal: number = null;
    subTotal: number = null;
    userId: number = null;
    packagesList: PackagesListGetModel[] = [];

    toLocal(oGetResponse: any) {
        const getModel: CartDetailsGetModel = Object.assign(new CartDetailsGetModel(), oGetResponse);
        if (getModel && getModel.packagesList && getModel.packagesList.length) {
            getModel.packagesList = getModel.packagesList.map((value: PackagesListGetModel) => new PackagesListGetModel().toLocal(value));
        }
        return getModel;
    }
}