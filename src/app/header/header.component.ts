import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageKeyTypes } from '../service/local-storage/local-storage-key-types';
import { LocalstorageService } from '../service/local-storage/localstorageservice.service';
import { headerNavigationList } from './header-navigation-list.model';
import { HeaderNavigationInterface } from './header.interface';

@Component({
  selector: 'sevenx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  headerNavigationList: HeaderNavigationInterface[] = headerNavigationList;

  isSidenavOpened: boolean = false;

  expandedItemName: string = '';

  // temporary variable
  // remove once login component complete.
  isLoggedInUser: boolean = false;

  constructor(
    private localStorageService: LocalstorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

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

  logOutClickHandler() {
    this.isLoggedInUser = false;
    this.localStorageService.removeLocalStorage(LocalStorageKeyTypes.TOKEN);
    this.localStorageService.removeLocalStorage(LocalStorageKeyTypes.LOGIN_USER);
    this.router.navigate(['main']);
  }
}
