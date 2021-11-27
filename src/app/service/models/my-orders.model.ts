import { BaseGetModel } from "../base-model/base.model";
import { PackagesListGetModel } from "./packages-list.model";

export class MyOrdersGetModel extends BaseGetModel {

    orderId: number = null;
    orderTotal: number = null;
    subTotal: number = null;
    userId: number = null;
    packagesList: PackagesListGetModel[] = [];
    id: number = null;

    createdAt: Date = null;
    updatedAt: Date = null;

    note: string = null;

    orderStatus: string = null;

    toLocal(oGetResponse: any) {
        const getModel: MyOrdersGetModel = Object.assign(new MyOrdersGetModel(), oGetResponse);
        if (getModel && getModel.packagesList && getModel.packagesList.length) {
            getModel.packagesList = getModel.packagesList.map((oPackage) => {
                return new PackagesListGetModel().toLocal(oPackage);
            });
        }
        return getModel;
    }
}