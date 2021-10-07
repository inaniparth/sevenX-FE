export interface HeaderNavigationInterface {
    label: string;
    screenName?: string;
    items?: HeaderNavigationInterface[];
    routerLink?: string[];
    width?: string;
    showInSearch?: boolean;
    queryParams?: any;
    divCount?: number;
    divNo?: number;
    groupByDiv?: { items: HeaderNavigationInterface[] }[]
}