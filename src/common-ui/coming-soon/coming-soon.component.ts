import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'sevenx-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComingSoonComponent implements OnInit {

  comingSoonAnimationOption: AnimationOptions = {
    path: 'assets/coming_soon.json'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
