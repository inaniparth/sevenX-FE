import { BaseGetModel } from "../base-model/base.model";

export class OrderListGetModel extends BaseGetModel {

    id: number;
    phoneNo: string;
    username: string;
    firstName: string;
    state: string;
    createdAt: string;
    finalOrderTotal: number;
    orderStatus: string;
    transactionStatus: string;

    toLocal(oGetResponse: OrderListGetModel) {
        const getModel: OrderListGetModel = Object.assign(new OrderListGetModel(), oGetResponse);
        getModel.createdAt = oGetResponse.createdAt ? new Date(oGetResponse.createdAt).toLocaleString() : '';
        return getModel;
    }
}