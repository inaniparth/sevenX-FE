export interface FooterNavigationInterface {
    label: string;
    screenName?: string;
    items?: FooterNavigationInterface[];
    routerLink?: string[];
    queryParam?: any;
}