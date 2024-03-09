import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { FormComponent } from './form/form.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsercourselistComponent } from './usercourselist/usercourselist/usercourselist.component';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    FormComponent,
    UsercourselistComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMapLibreGLModule,
  ],
})
export class PagesModule {}
