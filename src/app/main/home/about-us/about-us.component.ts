import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'sevenx-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  ourValues: AnimationOptions = {
    // path: 'assets/our_mission.json',
    path: 'assets/our_plans.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
