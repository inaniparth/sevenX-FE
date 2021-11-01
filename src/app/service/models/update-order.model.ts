import { BasePostModel } from "../base-model/base.model";

export class UpdateOrderPostModel extends BasePostModel {

    orderId: number = null;
    finalOrderTotalAmount: number = null;
    note: string = null;
    orderPackageList: any[] = [];
    additionalCost: number = null;
    transactionId: string = null;
    transactionStatus: string = null;

    toRemote(data: any) {
        const postModel: UpdateOrderPostModel = new UpdateOrderPostModel();
        postModel.orderId = data.id ? data.id : null;
        postModel.finalOrderTotalAmount = data.orderTotal ? data.orderTotal : null;
        postModel.note = data.note ? data.note : null;
        postModel.orderPackageList = data.packagesList && data.packagesList.length
            ? data.packagesList.map((oPackage) => new UpdatePackageListPostModel().toRemote(oPackage))
            : [];
        postModel.additionalCost = 0;
        postModel.transactionId = data.transactionId ? data.transactionId : null;
        postModel.transactionStatus = data.transactionStatus ? data.transactionStatus : 'Pending';

        return postModel;
    }
}

export class UpdatePackageListPostModel extends BasePostModel {
    orderPackageId: number = null;
    additionalCost: number = null;
    packageFinalAmount: number = null;

    toRemote(data: any) {
        const postModel: UpdatePackageListPostModel = new UpdatePackageListPostModel();
        postModel.orderPackageId = data.id ? data.id : null;
        postModel.additionalCost = 0;
        postModel.packageFinalAmount = data.amount ? data.amount : null;

        return postModel;
    }
}