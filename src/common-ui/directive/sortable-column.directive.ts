import { Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

/**
 * Enum contains the sorting order options.
 *
 * @export
 * @enum {number}
 */
export enum SortingOrder {
  ASCENDING = 'ASC',
  DESCENDING = 'DESC'
}

/**
 * Return type of the active sorting on changes output EventEmitter's event type.
 *
 * @export
 * @interface SortingColumnEvent
 */
export interface SortingColumnEvent {
  sortField: string;
  sortOrder: string;
}

@Directive({
  selector: '[appSortableColumn]'
})
export class SortableColumnDirective implements OnChanges {

  /**
   * Default sorting column and sorting order's details.
   *
   * @type {SortingColumnEvent}
   * @memberof SortableColumnDirective
   */
  @Input()
  defaultSortingEvent: SortingColumnEvent;

  /**
   * Active sorting column's name of the list.
   *
   * @type {string}
   * @memberof SortableColumnDirective
   */
  activeSortingColumn: string = '';

  /**
   * Active sorting order's type of the selected sortable column.
   *
   * @type {string}
   * @memberof SortableColumnDirective
   */
  activeSortingOrder: string = '';

  /**
   * Output property which emit the active sorting column name and sorting order's details on sorting changes.
   *
   * @type {EventEmitter<SortingColumnEvent>}
   * @memberof SortableColumnDirective
   */
  @Output()
  onSortingChange: EventEmitter<SortingColumnEvent> = new EventEmitter<SortingColumnEvent>();
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if ('defaultSortingEvent' in changes) {
      if (this.defaultSortingEvent) {
        this._setNewActiveSortingColumn(this.defaultSortingEvent.sortField, this.defaultSortingEvent.sortOrder);
      }
    }
  }

  /**
   * Returns true if selected sortable column is active sortable column for the list,
   * else returns false.
   *
   * @param {string} columnName
   * @return {*}  {boolean}
   * @memberof SortableColumnDirective
   */
  isActiveSortingColumn(columnName: string): boolean {
    return columnName && this.activeSortingColumn && columnName.toUpperCase() === this.activeSortingColumn.toUpperCase();
  }

  /**
   * Function to reset the active sorting column and sorting order's details.
   *
   * @memberof SortableColumnDirective
   */
  resetActiveSortingColumn() {
    this.activeSortingColumn = '';
    this.activeSortingOrder = '';
  }

  /**
   * Function to set the active sorting column and sorting order's details on click of any column's header,
   * and then emits the active sorting's information.
   *
   * @param {string} columnName
   * @memberof SortableColumnDirective
   */
  sortColumn(columnName: string) {
    if (columnName) {
      if (this.isActiveSortingColumn(columnName)) {
        // If selected sortable column is active sorting column,
        // then just reverse the sorting order for selected column.
        this._reverseActiveColumnSortingOrder();
      } else {
        // If selected sortable column is not an active sorting column,
        // then set the selected column as an active sorting column and ascending order as active sorting order.
        this._setNewActiveSortingColumn(columnName);
      }
      this._emitSortingChangesEvent();
    }
  }

  /**
   * Function to reverse the sorting order type for selected sortable column.
   *
   * @private
   * @memberof SortableColumnDirective
   */
  private _reverseActiveColumnSortingOrder() {
    switch (this.activeSortingOrder && this.activeSortingOrder.toUpperCase()) {
      case SortingOrder.ASCENDING.toUpperCase():
        this.activeSortingOrder = SortingOrder.DESCENDING;
        break;
      case SortingOrder.DESCENDING.toUpperCase():
        this.activeSortingOrder = SortingOrder.ASCENDING;
        break;
      default:
        this.activeSortingOrder = SortingOrder.ASCENDING;
        break;
    }
  }

  /**
   * Function to set the selected column as an active sorting column and ascending order as active sorting order.
   *
   * @private
   * @param {string} columnName
   * @memberof SortableColumnDirective
   */
  private _setNewActiveSortingColumn(columnName: string, sortingOrder: string = SortingOrder.ASCENDING) {
    this.activeSortingColumn = columnName;
    this.activeSortingOrder = sortingOrder;
  }

  /**
   * Function to emit the active sorting column name and sorting order's details on sorting changes.
   *
   * @private
   * @memberof SortableColumnDirective
   */
  private _emitSortingChangesEvent() {
    this.onSortingChange.emit({
      sortField: this.activeSortingColumn,
      sortOrder: this.activeSortingOrder
    });
  }

}
