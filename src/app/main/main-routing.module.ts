import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "../app-routing/auth.guard";
import { MainComponent } from "./main.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AboutUsMainComponent } from "./about-us-main/about-us-main.component";
import { DigitalMarketingComponent } from "./digital-marketing/digital-marketing.component";

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'digital-marketing',
        component: DigitalMarketingComponent,
      },
      {
        path: 'about-us',
        component: AboutUsMainComponent,
      },
      {
        path: 'my-account',
        component: MyAccountComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
        path: 'registrations',
        loadChildren: 'src/app/main/startup-registrations/startup-registrations.module#StartupRegistrationsModule',
      },
      // {
      //   path: '**',
      //   redirectTo: ''
      // }
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