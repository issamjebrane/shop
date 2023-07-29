import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { ProduitDashboardComponent } from './produit-dashboard/produit-dashboard.component';

const routes: Routes = [
  {
    path:"admin",
    component:AdminLayoutComponent,
    children:[
      { 
        path: '', 
        redirectTo: 
        'users', 
        pathMatch: 'full'
       } 
      ,
      {
        path:"users",
        component:UsersDashboardComponent
      },
      {
        path:"produits",
        component:ProduitDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
