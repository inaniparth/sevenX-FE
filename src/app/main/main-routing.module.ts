import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const mainRoutes: Routes = [

]

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: []
  })
  export class MainRoutingModule { }