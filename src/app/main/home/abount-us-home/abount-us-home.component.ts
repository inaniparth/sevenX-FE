import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'sevenx-abount-us-home',
  templateUrl: './abount-us-home.component.html',
  styleUrls: ['./abount-us-home.component.scss']
})
export class AbountUsHomeComponent implements OnInit {

  aboutUsHomeAnimationOption: AnimationOptions = {
    path: 'assets/about_us.json'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
