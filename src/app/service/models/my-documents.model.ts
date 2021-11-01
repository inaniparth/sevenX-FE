import { FormPageScreenTitleMap } from 'src/app/main/form-page/form-page-data';
import { BaseGetModel, BasePostModel } from '../base-model/base.model';

export class MyDocumentsGetModel extends BaseGetModel {
    documentURL: string = null;
    documentTitle: string = null;
    documentFor: string = null;
    screenName: string = null;
    userId: number = null;

    toLocal(oGetResponse: MyDocumentsGetModel) {
        oGetResponse.screenName = oGetResponse.screenName ? FormPageScreenTitleMap[oGetResponse.screenName] : '';
        return Object.assign(new MyDocumentsGetModel(), oGetResponse);
    }
}
