import { Component, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
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

  constructor() { }

  ngOnInit(): void {
    this.setTableComponentConfig();
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
    return of([]);
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

}
