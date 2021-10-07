import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { StripeComponent } from '../../stripe/stripe.component';

@Component({
  selector: 'sevenx-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  @Input()
  isOpenFromHome: boolean = true;

  @ViewChild('stripeComponent')
  stripeComponent: StripeComponent;

  constructor() { }

  ngOnInit(): void {
  }
  show: boolean;
  slidesPerView: number = 3;
  pagination: any = false;
  slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);
  virtualSlides = Array.from({ length: 600 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  navigation = false;
  toggleNavigation() {
    this.navigation = !this.navigation;
  }
  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 40 },
    1024: { slidesPerView: 3, spaceBetween: 50 }
  };
  scrollbar: any = false;
  toggleScrollbar() {
    if (!this.scrollbar) {
      this.scrollbar = { draggable: true };
    } else {
      this.scrollbar = false;
    }
  }
  indexNumber = 1;

  planSelectHandler(dummyAmount: number) {
    if (this.stripeComponent) {
      this.stripeComponent.initPayment(dummyAmount);
    }
  }
}
