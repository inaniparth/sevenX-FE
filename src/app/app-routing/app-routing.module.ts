import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    // loadChildren: () => import('app/main/main.module').then(m => MainModule)
    loadChildren: 'app/main/main.module#MainModule'
  }
];

export const AppRoutes: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, {
  relativeLinkResolution: 'legacy'
});

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  declarations: [],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
