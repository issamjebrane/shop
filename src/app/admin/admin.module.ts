import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { ProduitDashboardComponent } from './produit-dashboard/produit-dashboard.component';


@NgModule({
  declarations: [
    UsersDashboardComponent,
    ProduitDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
