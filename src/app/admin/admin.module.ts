import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ApplicantsComponent } from './applicants/applicants.component';
import { UsersComponent } from './users/users.component';
import { AdminLayoutsComponent } from './admin-layouts/admin-layouts.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApplicantsComponent, UsersComponent, AdminLayoutsComponent, TopbarComponent, SidebarComponent, AdminFooterComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
