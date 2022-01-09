import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sevenx-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reviews: any[] = [
    {
      blockquote: 'The sevenX platform is super easy to use and will be a reliable backbone of your business! It is fantastic to deal with when it comes to legal compliances.',
      img: '../../../../assets/IMG-0042.JPG',
      author: 'Ankit Modi',
      companyName: 'Government Employee'
    },
    {
      blockquote: 'You helped me with all the way to start a company and documentation for it. And you guys made everything simple and at a very nominal cost.',
      img: '../../../../assets/IMG-0043.jpg',
      author: 'Hiren Babariya',
      companyName: 'Software Developer'
    },
    {
      blockquote: 'Great people nice experience thanks for your great support, They helped me with to start my startup.',
      img: '../../../../assets/IMG-0044.jpg',
      author: 'Gunjan Chavda',
      companyName: 'Manager'
    },
    {
      blockquote: 'Great team, never had an issue getting a fast response and solution. Best for getting business registrations done.',
      img: '../../../../assets/IMG-0045.jpg',
      author: 'Parth Inani',
      companyName: 'IAS'
    },
    {
      blockquote: 'To be honest, I don’t know how you manage to do such a good job in time. Very well done! You continue to exceed every expectation that I set. Great job.',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg',
      author: 'Sumeet Rana',
      companyName: 'Founder of Hotels Group'
    }
  ]

}
