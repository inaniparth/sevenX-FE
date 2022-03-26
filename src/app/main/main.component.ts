import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MAIN_LAODER_ID } from '../app-utils';

@Component({
  selector: 'sevenx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  MAIN_LAODER_ID = MAIN_LAODER_ID;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((value) => {
      const element = document.getElementById('mainScrollableWindowContianer');
      if (element) {
        element.scroll({ top: 0 })
      }
    })
  }

}
