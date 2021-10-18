import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { headerNavigationList } from 'src/app/header/header-navigation-list.model';
import { HeaderNavigationInterface } from 'src/app/header/header.interface';
@Component({
  selector: 'sevenx-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  options: AnimationOptions = {
    path: 'assets/teamwork.json',
  };

  flying: AnimationOptions = {
    path: 'assets/flying.json',
  };
  search: AnimationOptions = {
    path: 'assets/search.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log("Animation Created", animationItem);
  }

  navigationListToBeSearch: HeaderNavigationInterface[] = [];

  searchText: string = null;

  matchedNavigationList: HeaderNavigationInterface[] = [];

  shouldShowSearchResults: boolean = false;

  constructor(
    private router: Router
  ) {
    this.setNavigationListToBeSearch(headerNavigationList);
  }

  ngOnInit(): void {
  }

  placeholder_samples = ["'Company Registration'", "'GST Filling'"];

  setNavigationListToBeSearch(navigationItems: HeaderNavigationInterface[]) {
    if (navigationItems && navigationItems.length) {
      navigationItems.forEach((item: HeaderNavigationInterface) => {
        if (item) {
          if (!(item.items && item.items.length)) {
            if (item.routerLink || item.showInSearch) {
              this.navigationListToBeSearch.push(item);
            }
          } else if (item.items && item.items.length) {
            this.setNavigationListToBeSearch(item.items);
          }
        }
      });
    }
  }

  searchTextChangeHandler(searchString: any) {
    if (searchString) {
      this.matchedNavigationList = this.navigationListToBeSearch.filter((navigationItem: HeaderNavigationInterface) => {
        return navigationItem && navigationItem.routerLink && navigationItem.label && navigationItem.label.toLowerCase().includes(searchString.toLowerCase());
      });
      this.shouldShowSearchResults = true;
    } else {
      this.matchedNavigationList = [...this.navigationListToBeSearch];
      this.shouldShowSearchResults = false;
    }
  }

  navigationItemClickHandler(navigationItem: HeaderNavigationInterface) {
    if (navigationItem && navigationItem.routerLink) {
      this.router.navigate(navigationItem.routerLink, {
        queryParams: navigationItem.queryParams
      });
    }
  }

}
