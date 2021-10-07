import { FormPageContainerType } from "./form-page-constants";

export interface FormPageScreenWiseDataModel {
    title: string;
    description: string;
    navigationContainers: FormPageNavigationContainerModel[];
}

export interface FormPageNavigationContainerModel {
    title: string;
    description?: string;
    navigationTitle: string;
    containerKey: string;
    type: FormPageContainerType;
    value: FormPageNavigationContainerValueModel[];
}

export interface FormPageNavigationContainerValueModel {
    title?: string;
    description?: string[];
    innerList?: FormPageNavigationContainerValueModel[]
}