import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sevenx-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {

  handler: any = null;

  @Output()
  eToken: EventEmitter<any> = new EventEmitter();

  orderId: number = null;

  constructor() { }

  ngOnInit(): void {
    this.initStripe();
  }

  initPayment(amount: any, name: string, description: string, orderId: number = null) {
    this.orderId = orderId;
    var handler = (<any>window).StripeCheckout.configure({
      // key: 'pk_test_51JVFdsSH9UKsd2LAvIg48gMlmH3qNejTxUvcoo5gDojy39e41Eh2KMViI5qy7ziBWrmjgyzSegmxsCHRAMndW3zc00XRgUATFN',
      key: 'pk_live_51JVFdsSH9UKsd2LAzcf0a6UQjkmQGChMSAD4VD7egWxHMwC2nPaktASV2jlvLImpZkxk1tLlUupz3dOzjwXq9m2B00yLk3uJeH',
      locale: 'auto',
      token: (token: any) => {
        this.eToken.emit({
          token: token,
          orderId: this.orderId
        });
      }
    });

    handler.open({
      name: name,
      description: description,
      amount: amount * 100, // stripe is showing amount/100
      currency: 'inr',
      liveMode: true
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
          // key: 'pk_test_51JVFdsSH9UKsd2LAvIg48gMlmH3qNejTxUvcoo5gDojy39e41Eh2KMViI5qy7ziBWrmjgyzSegmxsCHRAMndW3zc00XRgUATFN',
          key: 'pk_live_51JVFdsSH9UKsd2LAzcf0a6UQjkmQGChMSAD4VD7egWxHMwC2nPaktASV2jlvLImpZkxk1tLlUupz3dOzjwXq9m2B00yLk3uJeH',
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
