import { Component, OnInit } from '@angular/core';
import { footerNavigationList } from './footer-navigation-list.model';
import { FooterNavigationInterface } from './footer-navigation.interface';

@Component({
  selector: 'sevenx-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  styleUrls: ['./footer-navigation.component.scss']
})
export class FooterNavigationComponent implements OnInit {

  footerNavigationList: FooterNavigationInterface[] = footerNavigationList;

  constructor() { }

  ngOnInit(): void {
  }

}
