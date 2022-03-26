import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { filter } from 'rxjs/operators';
import { MAIN_LAODER_ID } from './app-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '7X';

  constructor(
    private router: Router,
    private ngxUILoaderService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((value) => {
      this.startLoader();
    })
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((value) => {
      this.stopLoader();
    })
  }

  private startLoader() {
    this.ngxUILoaderService.startLoader(MAIN_LAODER_ID);
  }

  private stopLoader() {
    this.ngxUILoaderService.stopLoader(MAIN_LAODER_ID);
  }
}
