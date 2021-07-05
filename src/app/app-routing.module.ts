import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainModule } from './main/main.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    loadChildren: () => import('app/main/main.module').then(m => MainModule)
  }
];

export const AppRoutes: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, {
  relativeLinkResolution: 'legacy'
});

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class AppRoutingModule { }
