import { TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { SortingColumnEvent } from "../directive/sortable-column.directive";
import { TableColumnTextAlignment, TableColumnTypes, TablePaginationPosition } from "./table-constants";

/**
 * Common table ui component's configuration.
 *
 * @export
 * @class TableConfig
 */
export class TableConfig {

    /**
     * Configuration to enable / disable pagination for the list.
     *
     * @type {boolean}
     * @memberof TableConfig
     */
    showPagination?: boolean = false;

    /**
     * Configuration to enable / disable column toggler for the list.
     *
     * @type {boolean}
     * @memberof TableConfig
     */
    showColumnToggler?: boolean = false;

    /**
     * Custom style class to apply on table's main container.
     *
     * @type {string}
     * @memberof TableConfig
     */
    tableStyleClass?: string = '';

    /**
     * List of all icons or actions which should be shown in table's Actions Column.
     *
     * @type {TableRowActionButtonsConfig[]}
     * @memberof TableConfig
     */
    rowActionButtons?: TableRowActionButtonsConfig[];

    /**
     * Style class for table's Actions Column.
     *
     * @type {string}
     * @memberof TableConfig
     */
    actionColumnStyleClass?: string = 'col-xx-1 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3 text-center';

    /**
     * Configuration to load data in table.
     *
     * @memberof TableConfig
     */
    dataLoadFunction: (requestModel: any) => Observable<any[]>;

    /**
     * Configuration to save column toggler's column selection changes in backEnd.
     *
     * @memberof TableConfig
     */
    saveColumnList: (columlist: string[]) => Observable<any>;

    /**
     * Configuration to set default sorting for table's column.
     *
     * @type {SortingColumnEvent}
     * @memberof TableConfig
     */
    defaultSortingDetails: SortingColumnEvent;

    /**
     * Message to show when No data available for the selected list.
     * Default value is "No Data Available".
     *
     * @type {string}
     * @memberof TableConfig
     */
    noDataFoundMessage?: string = "No Data Available";

    /**
     * Style class for table's body container.
     *
     * @type {string}
     * @memberof TableConfig
     */
    tableBodyStyleClass?: string = '';

    /**
     * Style class for table's row container.
     *
     * @memberof TableConfig
     */
    tableRowStyleClass?: (rowData: any) => string;

    /**
     * Flag to identify is row clickable or not.
     *
     * @type {boolean}
     * @memberof TableConfig
     */
    isRowClickable?: boolean = false;
}

/**
 * Common table ui component pagination's configuration.
 *
 * @export
 * @class TablePaginationConfig
 */
export class TablePaginationConfig {

    /**
     * Configuration to decide where to show pagination in the table.
     * TOP and BOTTOM options are available.
     *
     * @type {TablePaginationPosition}
     * @memberof TablePaginationConfig
     */
    position?: TablePaginationPosition = TablePaginationPosition.TOP;

    /**
     * Total count of records of the list's data.
     *
     * @type {number}
     * @memberof TablePaginationConfig
     */
    totalCount: number;

    /**
     * Configuration to decide how many records should be shown at single time in the table.
     *
     * @type {number}
     * @memberof TablePaginationConfig
     */
    pageSize: number;

    /**
     * Configuration to hide / show page size option in pagination.
     *
     * @type {boolean}
     * @memberof TablePaginationConfig
     */
    hidePageSize?: boolean = true;

    /**
     * Configuration which stores all the page size options should be available in table's pagination.
     *
     * @type {string[]}
     * @memberof TablePaginationConfig
     */
    pageSizeOptions?: string[] = [];

    /**
     * Configuration which stores the page index.
     *
     * @type {number}
     * @memberof TablePaginationConfig
     */
     pageIndex?: number = 0;

}

export class TableColumnTogglerConfig {

    /**
     * Maximum number of column which should be selected 
     * in column toggler at a time.
     *
     * @type {number}
     * @memberof TableColumnTogglerConfig
     */
    maxShownColumnCount: number = 0;

}

/**
 * Common table ui component's action column's configuration.
 *
 * @export
 * @class TableRowActionButtonsConfig
 */
export class TableRowActionButtonsConfig {

    /**
     * Configuration which contains name of icon which should be shown in table's Actions Column.
     *
     * @type {string}
     * @memberof TableRowActionButtonsConfig
     */
    iconName: string;

    /**
     * Row action button's click handler.
     *
     * @memberof TableRowActionButtonsConfig
     */
    onClick: (rowData: any) => void;

    /**
     * Custom style class to apply on row action button's container.
     *
     * @type {string}
     * @memberof TableRowActionButtonsConfig
     */
    styleClass?: string = '';

}

/**
 * Common table ui component columns' configuration.
 *
 * @export
 * @class TableColumnsConfig
 */
export class TableColumnsConfig {

    /**
     * Field name for the column which value should be shown in column from rowData.
     *
     * @type {string}
     * @memberof TableColumnsConfig
     */
    field: string;

    /**
     * Configuration contains name of the column which shown in the table's header.
     *
     * @type {string}
     * @memberof TableColumnsConfig
     */
    columnHeader: string;

    /**
     * Configuration to show any custom data in row's cell for selected column.
     *
     * @memberof TableColumnsConfig
     */
    displayFn?: (rowData: any) => string;

    /**
     * Configuration to show / hide column's tooltip from table.
     * By default its value is false.
     *
     * @type {boolean}
     * @memberof TableColumnsConfig
     */
    showTooltip?: boolean = false;

    /**
     * Configuration to show any custom data in row cell's tooltip for selected column.
     *
     * @memberof TableColumnsConfig
     */
    displayTooltipFn?: (rowData: any) => string;

    /**
     * Configuration to show / hide column header's tooltip from table.
     * By default its value is false.
     *
     * @type {boolean}
     * @memberof TableColumnsConfig
     */
     showHeaderTooltip?: boolean = false;

     /**
      * Configuration to show any custom data in row header cell's tooltip for selected column.
      *
      * @memberof TableColumnsConfig
      */
     displayHeaderTooltipFn?: (rowData: any) => string;

    /**
     * Configuration to indentify the type of the column.
     *
     * @type {TableColumnTypes}
     * @memberof TableColumnsConfig
     */
    columnType: TableColumnTypes;

    /**
     * Html template for the column of type custom.
     *
     * @type {TemplateRef<any>}
     * @memberof TableColumnsConfig
     */
    customColumnTemplate?: TemplateRef<any>;

    /**
     * Configuration to indentiy is selected column editable or not.
     *
     * @memberof TableColumnsConfig
     */
    isEditableColumn: (rowData: any) => boolean;

    /**
     * Custom style class to apply on table column's container.
     *
     * @type {string}
     * @memberof TableColumnsConfig
     */
    styleClass?: string = '';

    /**
     * Custom style to apply on table column's container.
     *
     * @type {{ [key: string]: any }}
     * @memberof TableColumnsConfig
     */
    style?: { [key: string]: any } = {};

    /**
     * Configuration to indentify is selected column sortable or not.
     *
     * @type {boolean}
     * @memberof TableColumnsConfig
     */
    isSortableColumn?: boolean = false;

    /**
     * Configuration to indentify is selected column required or not.
     *
     * @type {boolean}
     * @memberof TableColumnsConfig
     */
    isRequired?: boolean = false;

    /**
     * Configuration to bind any function at the component level which should be execute which on value changes in cell for selected column.
     *
     * @memberof TableColumnsConfig
     */
    onValueChanges?: (changeEvent: any) => void;

    /**
     * Sorting field name for the column which value should be passed sorting field while sorting the selected column.
     *
     * @type {string}
     * @memberof TableColumnsConfig
     */
    sortingFieldName?: string = '';

    /**
     * Configuration to show / hide column from table.
     * By default its value is false.
     *
     * @type {boolean}
     * @memberof TableColumnsConfig
     */
    isHiddenColumn?: boolean = false;

    /**
     * Configuration to show / hide column's option from column toggler.
     * If column is not shown in column toggler (hideFromColumnToggler = true), which means that column will always visible in table.
     * By default its value is false.
     *
     * @type {boolean}
     * @memberof TableColumnsConfig
     */
    hideFromColumnToggler?: boolean = false;

    /**
     * Configuration to show the selected column's cell and header text's alignment.
     *
     * @type {TableColumnTextAlignment}
     * @memberof TableColumnsConfig
     */
    textAlignment?: TableColumnTextAlignment = TableColumnTextAlignment.CENTER;

}

/**
 * Common table ui component's pagination change event.
 *
 * @export
 * @interface TablePaginationEvent
 */
export interface TablePaginationEvent {
    
    /**
     * Starting Index from where list's data should be show.
     *
     * @type {number}
     * @memberof TablePaginationEvent
     */
    start: number;

    /**
     * Ending Index till where list's data should be show.
     *
     * @type {number}
     * @memberof TablePaginationEvent
     */
    end: number;

    /**
     * Total count of records of the list's data. 
     *
     * @type {number}
     * @memberof TablePaginationEvent
     */
    totalRecords: number;

    /**
     * Number of records should be shown at single time in the table.
     *
     * @type {number}
     * @memberof TablePaginationEvent
     */
    limit: number;

}

/**
 * Update selected column list action's request model.
 *
 * @export
 * @interface TableShowHideColumnListRequestModel
 */
export interface TableShowHideColumnListRequestModel {

    /**
     * Column toggler key according to table's name.
     *
     * @type {string}
     * @memberof TableShowHideColumnListRequestModel
     */
    key: string;

    /**
     * List of selected togglable columns.
     *
     * @type {string[]}
     * @memberof TableShowHideColumnListRequestModel
     */
    reportVisibleColumn: string[];

}