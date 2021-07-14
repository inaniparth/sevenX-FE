export interface HeaderNavigationInterface {
    label: string;
    screenName?: string;
    items?: HeaderNavigationInterface[];
    routerLink?: string[];
    width?: string;
    showInSearch?: boolean;
    queryParam?: any;
}