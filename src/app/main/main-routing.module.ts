import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "../app-routing/auth.guard";
import { MainComponent } from "./main.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AboutUsMainComponent } from "./about-us-main/about-us-main.component";
import { DigitalMarketingComponent } from "./digital-marketing/digital-marketing.component";
import { FormPageComponent } from "./form-page/form-page.component";
import { CartComponent } from "./cart/cart.component";
import { ConsultantListComponent } from "./consultant-list/consultant-list.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { AdminAuthGuard } from "../app-routing/admin-auth.guard";

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
        path: 'service',
        component: FormPageComponent
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
        path: 'consultancy-list',
        component: ConsultantListComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
        canActivateChild: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'order-list',
        component: OrderListComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
        canActivateChild: [AuthGuard, AdminAuthGuard]
      },
      {
        path: 'cart',
        component: CartComponent
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