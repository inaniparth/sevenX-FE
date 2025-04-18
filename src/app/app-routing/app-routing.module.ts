import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login-signup/login/login.component';
import { SignUpComponent } from '../login-signup/sign-up/sign-up.component';
import { AdminAuthGuard } from './admin-auth.guard';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('app/main/main.module').then(m => MainModule)
    loadChildren: 'src/app/main/main.module#MainModule',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [AuthGuard, AdminAuthGuard],
})
export class AppRoutingModule {}
