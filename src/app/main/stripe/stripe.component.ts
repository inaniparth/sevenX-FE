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
      key: 'sk_test_51JVFdsSH9UKsd2LA5anWqtq8SsqRIlkYZhfz6HBWPPwqslLIhhSDP8nL0o5uMxOlspFTSIzVzDF2MLck2pEbPCko00Vbd3ByJr',
      locale: 'auto',
      token: (token: any) => {
        console.log(token);
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
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
          key: 'sk_test_51JVFdsSH9UKsd2LA5anWqtq8SsqRIlkYZhfz6HBWPPwqslLIhhSDP8nL0o5uMxOlspFTSIzVzDF2MLck2pEbPCko00Vbd3ByJr',
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
