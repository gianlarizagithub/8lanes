import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { canactivateloggedinGuard } from './authguard/canactivateloggedin.guard';
import { canactivateGuard } from './authguard/canactivate.guard';
import { AdminLayoutsComponent } from './admin/admin-layouts/admin-layouts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    // canActivate: [canactivateGuard]
  },
  {
    path: 'auth',
    component: AuthlayoutComponent,
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
    // canActivate: [canactivateloggedinGuard]
  },
  {
    path: 'admin',
    component: AdminLayoutsComponent,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
