import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersAdminRoutingModule } from './users-admin/users-admin-routing.module';
import { ProductAdminModule } from './product-admin/product-admin.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProductAdminModule,
    UsersAdminRoutingModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
