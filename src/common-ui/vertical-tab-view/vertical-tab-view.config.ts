import { TemplateRef } from "@angular/core";

export class VerticalTabViewConfig {

    /**
     * List of Configurations of vertial tabs.
     *
     * @type {VeritcalTabConfig[]}
     * @memberof VerticalTabViewConfig
     */
    tabs: VeritcalTabConfig[] = [];

    /**
     * Styleclass to apply on vertical tab view's main container.
     * 
     * @type {string}
     * @memberof VerticalTabViewConfig
     */
    styleClass?: string = '';
}

export class VeritcalTabConfig {

    /**
     * Label of tab which should be shown as tab's display text.
     *
     * @type {string}
     * @memberof VeritcalTabConfig
     */
    label: string = '';

    /**
     * Vertical tab's unique code.
     * 
     * @type {string}
     * @memberof VeritcalTabConfig
     */
    code: string = '';

    /**
     * Icon class to show with tab's label.
     *
     * @type {string}
     * @memberof VeritcalTabConfig
     */
    iconClass?: string = '';

    /**
     * Template or component which should be shown when on tab selection.
     * 
     * @type {*}
     * @memberof VeritcalTabConfig
     */
    viewTemplate?: any;

    /**
     * Styleclass to apply on vertical tab's container.
     *
     * @type {string}
     * @memberof VeritcalTabConfig
     */
    styleClass?: string = '';

    /**
     * Custom label template in case requirement is not show any custom thing in tab's display text.
     *
     * @type {TemplateRef<any>}
     * @memberof VeritcalTabConfig
     */
    customLabelTemplate?: TemplateRef<any>;

    /**
     * Configuration to hide / show the vertical tab from the list.
     * 
     * @memberof VeritcalTabConfig
     */
    isHidden?: () => boolean;

    /**
     * Configuration to perform any logic when tab select.
     * 
     * @memberof VeritcalTabConfig
     */
    onTabSelection?: () => void;
}