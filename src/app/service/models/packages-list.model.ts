import { FormPageScreenDescriptionMap, FormPageScreenTitleMap } from "src/app/main/form-page/form-page-data";
import { BaseGetModel } from "../base-model/base.model";

export class PackagesListGetModel extends BaseGetModel {

    amount: number = null;
    description: string = null;
    finalAmount: number = null;
    heading: string = null;
    id: number = null;
    planName: string = null;
    screenName: string = null;
    qty: number = null;
    note: string = null;

    toLocal(oGetResponse: any) {
        const getModel: PackagesListGetModel = Object.assign(new PackagesListGetModel(), oGetResponse);
        getModel.planName = FormPageScreenTitleMap[getModel.screenName];
        getModel.description = FormPageScreenDescriptionMap[getModel.screenName];
        return getModel;
    }
}