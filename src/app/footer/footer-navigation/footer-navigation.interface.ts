export interface FooterNavigationInterface {
    label: string;
    screenName?: string;
    items?: FooterNavigationInterface[];
    routerLink?: string[];
    queryParams?: any;
}