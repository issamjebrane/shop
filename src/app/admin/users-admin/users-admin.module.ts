import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersAdminRoutingModule } from './users-admin-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';


@NgModule({
  declarations: [
    AddUserComponent,
    UpdateUserComponent,
    UsersDashboardComponent
  ],
  imports: [
    CommonModule,
    UsersAdminRoutingModule
  ]
})
export class UsersAdminModule { }
