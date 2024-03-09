import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantsComponent } from './applicants/applicants.component';
import { UsersComponent } from './users/users.component';
import { canactivateGuard } from '../authguard/canactivate.guard';

const routes: Routes = [
  {
    path: 'applicants',
    component: ApplicantsComponent,
    canActivate: [canactivateGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [canactivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
