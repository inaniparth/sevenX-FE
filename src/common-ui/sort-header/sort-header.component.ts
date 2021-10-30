import { Component, Input } from '@angular/core';
import { SortableColumnDirective } from '../directive/sortable-column.directive';
import { TableColumnTextAlignment } from '../table/table-constants';

@Component({
  selector: '[app-sort-header]',
  templateUrl: './sort-header.component.html',
  styleUrls: ['./sort-header.component.scss']
})
export class SortHeaderComponent {

  /**
   * Name of column on which component is binded to apply sorting.
   *
   * @type {string}
   * @memberof SortHeaderComponent
   */
  @Input('app-sort-header')
  columnName: string = null;

  /**
   * Property to enable / disable the sorting option for table's header.
   *
   * @type {boolean}
   * @memberof SortHeaderComponent
   */
  @Input()
  disableSorting: boolean = true;

  /**
   * Property to align the column header's text according to column alignment configuration.
   *
   * @type {TableColumnTextAlignment}
   * @memberof SortHeaderComponent
   */
  @Input()
  columnTextAlignment: TableColumnTextAlignment = null;

  /**
   * Table column text's alignment.
   *
   * @memberof SortHeaderComponent
   */
  tableColumnTextAlignment = TableColumnTextAlignment;

  /**
   * Stores the actived sorting order for selected sortable column.
   *
   * @type {string}
   * @memberof SortHeaderComponent
   */
  activeSortingOrder: string = null;

  constructor(
    private _sortableColumnDirective: SortableColumnDirective
  ) {
    this.setActiveSortingOrder();
  }

  /**
   * Sortable column header container's click handler.
   * Function execute the sortColumn method of SortableColumnDirective,
   * and then set the value of active sorting order at SortHeaderComponent level.
   *
   * @memberof SortHeaderComponent
   */
  sortableColumnHeaderClickHandler() {
    if (!this.disableSorting) {
      this._sortableColumnDirective.sortColumn(this.columnName);
      this.setActiveSortingOrder();
    }
  }

  /**
   * Returns true if selected sortable column is active sortable column for the list,
   * else returns false.
   *
   * @return {*}  {boolean}
   * @memberof SortHeaderComponent
   */
  isActiveSortingColumn(): boolean {
    return this._sortableColumnDirective && this._sortableColumnDirective.isActiveSortingColumn(this.columnName);
  }

  /**
   * Function to set the value of active sorting order at SortHeaderComponent level from SortableColumnDirective.
   *
   * @memberof SortHeaderComponent
   */
  setActiveSortingOrder() {
    this.activeSortingOrder = this._sortableColumnDirective && this._sortableColumnDirective.activeSortingOrder;
  }

}
