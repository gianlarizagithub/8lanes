import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { canactivateGuard } from '../authguard/canactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'form',
    component: FormComponent,
    canActivate: [canactivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
