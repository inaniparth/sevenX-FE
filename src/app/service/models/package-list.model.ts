import { FormPageScreenCode } from 'src/app/main/form-page/form-page-constants';
import { BaseGetModel, BasePostModel } from '../base-model/base.model';

export class PackageListGetModel extends BaseGetModel {

    amount: number = null;
    description: string = null;
    finamAmount: number = null;
    heading: string = null;
    id: number = null;
    planName: string = null;
    screenName: FormPageScreenCode = null;

    descriptionList: string[] = [];

    toLocal(oGetResponse: any) {
        this.amount = oGetResponse.amount;
        this.description = oGetResponse.description;
        this.finamAmount = oGetResponse.finamAmount;
        this.heading = oGetResponse.heading;
        this.id = oGetResponse.id;
        this.planName = oGetResponse.planName;
        this.screenName = oGetResponse.screenName;

        this.descriptionList = this.description.split(";");

        return this;
    }
}

export class PackageListPostModel extends BasePostModel {
    screenNameList: Array<FormPageScreenCode> = [];

    toRemote(data: any) {
        return {
            screenNameList: data.screenNameList
        };
    }
}
