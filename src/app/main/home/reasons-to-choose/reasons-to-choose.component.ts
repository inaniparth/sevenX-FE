import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'sevenx-reasons-to-choose',
  templateUrl: './reasons-to-choose.component.html',
  styleUrls: ['./reasons-to-choose.component.scss']
})
export class ReasonsToChooseComponent implements OnInit {
  options: AnimationOptions = {
    path: 'assets/reasons.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log("Animation Created",animationItem);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
