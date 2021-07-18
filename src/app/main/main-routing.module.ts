import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "../app-routing/auth.guard";
import { MainComponent } from "./main.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'contact-us',
        component: ContactUsComponent,
      }
    ]
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'my-account',
        component: MyAccountComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class MainRoutingModule { }