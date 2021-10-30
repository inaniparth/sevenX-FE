import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { getFormControl, setFormControlValue } from 'src/app/app-utils';
import { SortingOrder } from 'src/common-ui/directive/sortable-column.directive';
import { TableColumnsConfig, TableConfig, TablePaginationConfig } from 'src/common-ui/table/table-config';
import { TableColumnTypes } from 'src/common-ui/table/table-constants';
import { TableComponent } from 'src/common-ui/table/table.component';

@Component({
  selector: 'sevenx-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  @ViewChild('orderTable')
  orderTable: TableComponent;

  tableConfig: TableConfig;

  tableColumnsConfig: TableColumnsConfig[];

  tablePaginationConfig: TablePaginationConfig;

  filterForm: FormGroup;

  orderStatusList: string[] = ['Pending', 'Approved'];

  filteredOrderStatusList: string[] = [];

  transactionStatusList: string[] = ['Pending', 'Paid'];

  filteredTransactionStatusList: string[] = [];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initFilterForm();
    this.setTableComponentConfig();
  }

  initFilterForm() {
    this.filterForm = this.formBuilder.group({
      fromDate: [],
      toDate: [],
      firstName: [],
      username: [],
      phoneNo: [],
      orderStatus: [],
      transactionStatus: []
    });
    getFormControl('fromDate', this.filterForm).disable();
    getFormControl('toDate', this.filterForm).disable();
  }

  setTableComponentConfig() {
    this.tableConfig = this.getTableConfig();
    this.tableColumnsConfig = this.getTableColumnsConfig();
    this.tablePaginationConfig = this.getTablePaginationConfig();
  }

  getTableConfig(): TableConfig {
    const tableConfig: TableConfig = new TableConfig();
    tableConfig.showPagination = true;
    tableConfig.defaultSortingDetails = { sortField: 'name', sortOrder: SortingOrder.ASCENDING };
    tableConfig.dataLoadFunction = this.dataLoadFunction.bind(this);
    return tableConfig;
  }

  dataLoadFunction(requestModel: any) {
    const filterModel = this.getFilterRequestModel();
    if (filterModel) {
      requestModel = requestModel ? Object.assign(requestModel, filterModel) : Object.assign({}, filterModel);
    }
    console.log(requestModel);
    return of([]);
  }

  getFilterRequestModel() {
    const filterModel = JSON.parse(JSON.stringify(this.filterForm.getRawValue()));
    if (filterModel.fromDate) {
      filterModel.fromDate = Date.parse(filterModel.fromDate);
    }
    if (filterModel.toDate) {
      filterModel.toDate = Date.parse(filterModel.toDate);
    }
    return filterModel;
  }

  getTableColumnsConfig(): TableColumnsConfig[] {
    return [
      {
        field: 'name',
        columnHeader: 'Name',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'width100',
        isSortableColumn: true
      }
    ]
  }

  getTablePaginationConfig(): TablePaginationConfig {
    const tablePaginationConfig: TablePaginationConfig = new TablePaginationConfig();
    tablePaginationConfig.pageSize = 25;
    tablePaginationConfig.pageSizeOptions = ['10', '25', '50', '100'];
    return tablePaginationConfig;
  }

  orderStatusInputChangeHandler(searchedValue: string) {
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.filteredOrderStatusList = this.orderStatusList.filter((status: string) => {
      return status && status.toLowerCase().includes(searchedValue);
    });
  }

  orderStatusFieldCloseHandler(orderStatusInputElement: HTMLInputElement) {
    if (orderStatusInputElement) {
      const searchedString = orderStatusInputElement.value ? orderStatusInputElement.value.toLowerCase().trim() : '';
      let matchedValue: string = null;
      if (searchedString) {
        matchedValue = this.orderStatusList.find((status: string) => {
          return status && status.toLowerCase() === searchedString;
        }) || null;
      }
      setFormControlValue('orderStatus', matchedValue, this.filterForm);
      orderStatusInputElement.blur();
    }
  }

  transactionStatusInputChangeHandler(searchedValue: string) {
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.filteredTransactionStatusList = this.transactionStatusList.filter((status: string) => {
      return status && status.toLowerCase().includes(searchedValue);
    });
  }

  transactionStatusFieldCloseHandler(transactionStatusInputElement: HTMLInputElement) {
    if (transactionStatusInputElement) {
      const searchedString = transactionStatusInputElement.value ? transactionStatusInputElement.value.toLowerCase().trim() : '';
      let matchedValue: string = null;
      if (searchedString) {
        matchedValue = this.transactionStatusList.find((status: string) => {
          return status && status.toLowerCase() === searchedString;
        }) || null;
      }
      setFormControlValue('transactionStatus', matchedValue, this.filterForm);
      transactionStatusInputElement.blur();
    }
  }

  resetClickHandler() {
    this.filterForm.reset();
    this.refreshTableData();
  }

  filterClickHandler() {
    this.refreshTableData();
  }

  refreshTableData() {
    if (this.orderTable) {
      this.orderTable.loadTableData();
    }
  }

}
