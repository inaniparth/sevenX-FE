import { BaseGetModel } from "../base-model/base.model";

export class PackagesListGetModel extends BaseGetModel {

    amount: number = null;
    description: string = null;
    finalAmount: number = null;
    heading: string = null;
    id: number = null;
    planName: string = null;
    screenName: string = null;

    toLocal(oGetResponse: any) {
        const getModel: PackagesListGetModel = Object.assign(new PackagesListGetModel(), oGetResponse);
        return getModel;
    }
}