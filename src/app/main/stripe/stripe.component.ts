import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sevenx-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {

  handler: any = null;

  constructor() { }

  ngOnInit(): void {
    this.initStripe();
  }

  initPayment(amount: any) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51JVFdsSH9UKsd2LAvIg48gMlmH3qNejTxUvcoo5gDojy39e41Eh2KMViI5qy7ziBWrmjgyzSegmxsCHRAMndW3zc00XRgUATFN',
      locale: 'auto',
      token: (token: any) => {
        console.log(token);
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount
    });

  }

  initStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51JVFdsSH9UKsd2LAvIg48gMlmH3qNejTxUvcoo5gDojy39e41Eh2KMViI5qy7ziBWrmjgyzSegmxsCHRAMndW3zc00XRgUATFN',
          locale: 'auto',
          token: (token: any) => {
            console.log(token);
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }

}
