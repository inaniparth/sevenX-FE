import { BasePostModel } from "../base-model/base.model";

export class IncrementDecrementPackagePostModel extends BasePostModel {
    packageId: number = null;
    increase: boolean = true;

    toRemote(data: any) {
        return {
            packageId: data.packageId,
            increase: data.increase
        };
    }
}