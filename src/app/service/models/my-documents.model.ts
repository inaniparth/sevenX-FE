import { LoginTypes } from 'src/app/google-authorization/utils';
import { BaseGetModel, BasePostModel } from '../base-model/base.model';

export class MyDocumentsGetModel extends BaseGetModel {
    documentURL: string = null;
    documentTitle: string = null;
    documentFor: string = null;
    userId: number = null;

    toLocal(oGetResponse: any) {
        return Object.assign(new MyDocumentsGetModel(), oGetResponse);
    }
}
