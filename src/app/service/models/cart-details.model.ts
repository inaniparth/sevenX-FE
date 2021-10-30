import { BaseGetModel } from "../base-model/base.model";
import { PackagesListGetModel } from "./packages-list.model";

export class CartDetailsGetModel extends BaseGetModel {

    gstAmount: number = null;
    orderTotal: number = null;
    subTotal: number = null;
    userId: number = null;
    packagesList: PackagesListGetModel[] = [];

    cartTotalCount: number = 0;

    toLocal(oGetResponse: any) {
        const getModel: CartDetailsGetModel = Object.assign(new CartDetailsGetModel(), oGetResponse);
        if (getModel && getModel.packagesList && getModel.packagesList.length) {
            const tempPackagesList: PackagesListGetModel[] = [];
            getModel.packagesList.forEach((value: PackagesListGetModel) => {
                getModel.cartTotalCount += value.qty || 0;
                tempPackagesList.push(new PackagesListGetModel().toLocal(value));
            });
            getModel.packagesList = JSON.parse(JSON.stringify(tempPackagesList));
        }
        return getModel;
    }
}