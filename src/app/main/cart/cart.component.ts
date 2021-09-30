import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sevenx-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartDetails: any = [
    {
      type: 'Basic',
      category: 'Public Limited Company Registration',
      description: 'Public Limited Company Registration , Incorporation Certificate, Digital Signature Certificate (2 Nos.), MOA/AOA, PAN/TAN, Expert Consultancy,'
    },
    {
      type: 'Basic',
      category: 'Public Limited Company Registration',
      description: 'Public Limited Company Registration , Incorporation Certificate, Digital Signature Certificate (2 Nos.), MOA/AOA, PAN/TAN, Expert Consultancy,'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
