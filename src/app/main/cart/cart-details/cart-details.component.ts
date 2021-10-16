import { Component, Input, OnInit } from '@angular/core';
import { PackagesListGetModel } from 'src/app/service/models/packages-list.model';

@Component({
  selector: 'sevenx-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  @Input()
  package: PackagesListGetModel = null;

  constructor() { }

  ngOnInit(): void {
  }

}
