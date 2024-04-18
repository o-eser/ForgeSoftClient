import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule), canActivate: [AuthGuard] },
  { path: 'shipment-list', loadChildren: () => import('./pages/shipment-list/shipment-list.module').then(m => m.ShipmentListModule), canActivate: [AuthGuard] },
  { path: 'detail/:id', loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule), canActivate: [AuthGuard] },
  { path: 'update', loadChildren: () => import('./pages/update-shipment/update-shipment.module').then(m => m.UpdateShipmentModule), canActivate: [AuthGuard] },
  { path: 'create', loadChildren: () => import('./pages/create-shipment/create-shipment.module').then(m => m.CreateShipmentModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import("./pages/login/login.module").then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import("./pages/register/register.module").then(m => m.RegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
