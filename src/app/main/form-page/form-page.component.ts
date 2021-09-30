import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'sevenx-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  navigations: Array<Object> = [ 
    {name: 'Overview', active: 'true'},
    {name: 'Types', active: 'false'},
    {name: 'Benefits', active: 'false'},
    {name: 'Listicles', active: 'false'},
    {name: 'Registration', active: 'false'},
    {name: 'Procedure', active: 'false'},
    {name: 'Support', active: 'false'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  toggleActive($event): any {
    console.log($event);
    this.navigations.forEach((item, i) => {
      if(this.navigations[i]["active"] === "true") {
        this.navigations[i]["active"] = "false";
      }
    })
  }

}
