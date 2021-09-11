import { LoginTypes } from 'src/app/google-authorization/utils';
import { BaseGetModel, BasePostModel } from '../base-model/base.model';

export class UploadDocumentGetModel extends BaseGetModel {
    documentURL: string = null;
    documentTitle: string = null;
    documentFor: string = null;
    userId: number = null;

    toLocal(oGetResponse: any) {
        return Object.assign(new UploadDocumentGetModel(), oGetResponse);
    }
}

export class UploadDocumentPostModel extends BasePostModel {
    document: any = null;
    documentFor: string = null;
    documentTitle: string = null;

    toRemote(data: any) {
        return {
            document: data.document,
            documentFor: data.documentFor,
            documentTitle: data.documentTitle
        };
    }
}
