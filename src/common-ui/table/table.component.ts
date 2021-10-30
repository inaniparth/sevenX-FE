import { Component, ContentChild, Input, OnInit, Output, TemplateRef, EventEmitter, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SortingColumnEvent } from '../directive/sortable-column.directive';
import { TableColumnsConfig, TableColumnTogglerConfig, TableConfig, TablePaginationConfig, TablePaginationEvent, TableShowHideColumnListRequestModel } from './table-config';
import { TableColumnTextAlignment, TableColumnTypes, TablePaginationPosition } from './table-constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit, OnChanges {

  /**
   * Content child for table header's custom display template.
   *
   * @type {TemplateRef<any>}
   * @memberof TableComponent
   */
  @ContentChild('tableHeaderDisplayTemplate')
  tableHeaderDisplayTemplate: TemplateRef<any>;

  /**
   * Content child for table footer's custom display template.
   *
   * @type {TemplateRef<any>}
   * @memberof TableComponent
   */
  @ContentChild('tableFooterDisplayTemplate')
  tableFooterDisplayTemplate: TemplateRef<any>;

  /**
   * Table's configuration.
   *
   * @type {TableConfig}
   * @memberof TableComponent
   */
  @Input()
  tableConfig: TableConfig;

  /**
   * Table's pagination configuration.
   *
   * @type {TablePaginationConfig}
   * @memberof TableComponent
   */
  @Input()
  tablePaginationConfig: TablePaginationConfig;

  /**
   * Table's columns configuration.
   *
   * @type {TableColumnsConfig[]}
   * @memberof TableComponent
   */
  @Input()
  tableColumnsConfig: TableColumnsConfig[];

  /**
   * Boolean property which shows/hides table loader.
   *
   * @type {boolean}
   * @memberof TableComponent
   */
  @Input()
  set isLoading(value) {
    this._isLoading = !!value;
    !!value ? this.startLoader() : this.stopLoader()
  }
  get isLoading(): boolean {
    return this._isLoading;
  }
  private _isLoading: boolean = false;

  /**
   * Table's pagination page change event emitter.
   *
   * @memberof TableComponent
   */
  @Output()
  pageChanged: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  /**
   * Table's pagination sorting change event emitter.
   *
   * @memberof TableComponent
   */
  @Output()
  sortingChanged: EventEmitter<SortingColumnEvent> = new EventEmitter<SortingColumnEvent>();

  /**
   * Table's row click event emitter
   *
   * @type {EventEmitter<any>}
   * @memberof TableComponent
   */
  @Output()
  rowClick: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Table column's available types.
   *
   * @memberof TableComponent
   */
  tableColumnTypes = TableColumnTypes;

  /**
   * Table pagination's available positions.
   *
   * @memberof TableComponent
   */
  tablePaginationPosition = TablePaginationPosition;

  /**
   * Table column text's alignment.
   *
   * @memberof TableComponent
   */
  tableColumnTextAlignment = TableColumnTextAlignment;

  /**
   * Loader id for table's component.
   *
   * @memberof TableComponent
   */
  @Input('loaderId')
  LOADER_ID = "table-component-loader";

  /**
   * Table's data which should be load in the list.
   *
   * @type {any[]}
   * @memberof TableComponent
   */
  @Input('data')
  tableData: any[];

  /**
   * Variable which contains current pagination's details for the list.
   *
   * @type {TablePaginationEvent}
   * @memberof TableComponent
   */
  currentPaginationDetails: TablePaginationEvent;

  /**
   * Variable which contains current sorting's details for the list.
   *
   * @type {SortingColumnEvent}
   * @memberof TableComponent
   */
  currentSortingDetails: SortingColumnEvent;

  constructor(
    private ngxUILoaderService: NgxUiLoaderService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if ('tablePaginationConfig' in changes) {
      this.setCurrentPaginationDetails();
    }
    if ('tableConfig' in changes) {
      this.tableConfigChangeHandler();
    }
  }

  /**
   * Table's configuration change handler.
   *
   * @private
   * @memberof TableComponent
   */
  private tableConfigChangeHandler() {
    if (this.tableConfig?.defaultSortingDetails) {
      this.currentSortingDetails = JSON.parse(JSON.stringify(this.tableConfig?.defaultSortingDetails));
    }
    this.loadTableData();
  }

  ngOnInit(): void {

  }

  /**
   * Function to set the current paginatin's details for selected list.
   *
   * @private
   * @param {PageEvent} [pageEvent] Pagination changed details.
   * @param {boolean} [reloadTableData=false] Flag used to call loadTableData method when it's true.
   * @memberof TableComponent
   */
  private setCurrentPaginationDetails(pageEvent?: PageEvent, reloadTableData: boolean = false) {
    if (this.tableConfig && this.tableConfig.showPagination) {
      // When table have a configuration to show pagination.
      if (pageEvent) {
        // If pagination changed details is available.
        this.currentPaginationDetails = {
          limit: pageEvent.pageSize,
          // totalRecords: pageEvent.length,
          offset: pageEvent.pageIndex * pageEvent.pageSize,
          // end: (pageEvent.pageIndex * pageEvent.pageSize) + pageEvent.pageSize
        };
        this.tablePaginationConfig.pageIndex = pageEvent.pageIndex;
      } else if (this.tablePaginationConfig) {
        // When pagination changed details is not available but table's pagination configuration is available.
        this.currentPaginationDetails = {
          limit: this.tablePaginationConfig.pageSize,
          // totalRecords: 0,
          offset: 0,
          // end: this.tablePaginationConfig.pageSize
        }
      } else {
        // When pagination changed details and table's pagination configuration both are not available.
        this.currentPaginationDetails = null;
      }
    }
    if (reloadTableData) {
      // When reloadTableData flag is set to true, call loadTableData method.
      this.loadTableData();
    }
  }

  /**
   * Function to load list's data in table.
   *
   * @memberof TableComponent
   */
  loadTableData() {
    if (this.tableConfig && this.tableConfig.dataLoadFunction) {
      // When dataLoadFunction is provided in table's configuration.
      // Start UI Loader before making an api call to load list's data.
      this.isLoading = true;
      const requestModel = this.getLoadTableDataRequestModel();
      this.tableConfig.dataLoadFunction(requestModel).subscribe((response: any[]) => {
        if (response) {
          // When getting response from the api call successfully.
          // Stop UI Loader and set response's data in table's data.
          this.isLoading = false;
          this.tableData = response;
        }
      }, (error: any) => {
        // When not getting response from the api call successfully.
        // Stop UI Loader and throw response error in console.
        this.isLoading = false;
        console.error(error);
      })
    }
  }

  /**
   * Function returns the request model for api call to get list's data.
   *
   * @private
   * @return {*} 
   * @memberof TableComponent
   */
  private getLoadTableDataRequestModel() {
    let requestModel: any = null;
    if (this.tableConfig && this.tableConfig.showPagination && this.currentPaginationDetails) {
      // Setting the current pagination's details for api call's request model.
      requestModel = Object.assign(requestModel ? requestModel : {}, this.currentPaginationDetails);
    }
    if (this.currentSortingDetails) {
      // Setting the table's current sorting details for api call's request model.
      requestModel = Object.assign(requestModel ? requestModel : {}, this.currentSortingDetails);
    }
    return requestModel;
  }

  /**
   * Function to start UI loader for selected table.
   *
   * @memberof TableComponent
   */
  startLoader() {
    this.ngxUILoaderService.startLoader(this.LOADER_ID);
  }

  /**
   * Function to stop UI loader for selected table.
   *
   * @memberof TableComponent
   */
  stopLoader() {
    this.ngxUILoaderService.stopLoader(this.LOADER_ID);
  }

  /**
   * Table pagination's details change handler.
   *
   * @param {PageEvent} event
   * @memberof TableComponent
   */
  paginationPageChangeHandler(event: PageEvent) {
    this.pageChanged.emit(event);
    this.setCurrentPaginationDetails(event, true);
  }

  /**
   * Table sorting's details change handler.
   *
   * @param {SortingColumnEvent} sortingColumnEvent
   * @memberof TableComponent
   */
  sortingChangeHandler(sortingColumnEvent: SortingColumnEvent) {
    this.sortingChanged.emit(sortingColumnEvent);
    this.currentSortingDetails = sortingColumnEvent;
    if (this.currentSortingDetails) {
      this.loadTableData();
    }
  }

  /**
   * Function to get all selected columns for selected table.
   *
   * @private
   * @return {*}  {TableColumnsConfig[]}
   * @memberof TableComponent
   */
  private getAllSelectedColumns(): TableColumnsConfig[] {
    let selectedColumns: TableColumnsConfig[] = [];
    if (this.tableColumnsConfig && this.tableColumnsConfig.length) {
      selectedColumns = this.tableColumnsConfig.filter((column: TableColumnsConfig) => !column.isHiddenColumn)
    }
    return selectedColumns;
  }

  /**
   * Table's row click handler.
   *
   * @param {*} rowData
   * @memberof TableComponent
   */
  rowClickHandler(rowData: any) {
    if (this.tableConfig && this.tableConfig.isRowClickable) {
      this.rowClick.emit(rowData);
    }
  }

}
