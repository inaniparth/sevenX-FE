import { FormPageScreenTitleMap } from "src/app/main/form-page/form-page-data";
import { BaseGetModel } from "../base-model/base.model";

export class ConsultantListGetModel extends BaseGetModel {

    id: number;
    contactNo: string;
    email: string;
    name: string;
    screenName: string;
    state: string;
    createdAt: string;

    toLocal(oGetResponse: ConsultantListGetModel) {
        const getModel: ConsultantListGetModel = Object.assign(new ConsultantListGetModel(), oGetResponse);
        getModel.screenName = oGetResponse.screenName ? FormPageScreenTitleMap[oGetResponse.screenName] : '';
        getModel.createdAt = oGetResponse.createdAt ? new Date(oGetResponse.createdAt).toLocaleString() : '';
        return getModel;
    }
}