import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { FormComponent } from './form/form.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    FormComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
