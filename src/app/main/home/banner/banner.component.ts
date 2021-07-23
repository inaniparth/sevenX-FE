import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
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
    console.log("Animation Created",animationItem);
  }
  constructor() { }

  ngOnInit(): void {
  }

  placeholder_samples = ["'Company Registration'", "'GST Filling'"];
}
