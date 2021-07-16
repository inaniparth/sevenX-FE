import { Component, OnInit } from '@angular/core';
import { headerNavigationList } from './header-navigation-list.model';
import { HeaderNavigationInterface } from './header.interface';

@Component({
  selector: 'sevenx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerNavigationList: HeaderNavigationInterface[] = headerNavigationList;

  isSidenavOpened: boolean = false;

  expandedItemName: string = '';

  // temporary variable
  // remove once login component complete.
  isLoggedInUser: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sidenavOpenClickHandler() {
    this.isSidenavOpened = true;
  }

  sidenavCloseClickHandler() {
    this.isSidenavOpened = false;
    this.expandedItemName = '';
  }

  sidenavHeaderItemClickHandler(headerItemLabel: string) {
    if (this.expandedItemName === headerItemLabel) {
      this.expandedItemName = '';
    } else {
      this.expandedItemName = headerItemLabel;
    }
  }

}
