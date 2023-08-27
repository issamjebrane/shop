import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';

import { adminGuard } from '../guards/admin.guard';

const routes: Routes = [
  {
    path:"admin",
    component:AdminLayoutComponent,
    canActivate:[adminGuard],
    children:[
      { 
        path: '', 
        redirectTo: 
        'products', 
        pathMatch: 'full'
       } 
      ,
      {
        path:"users",
        loadChildren: () => import('./users-admin/users-admin.module').then(m =>m.UsersAdminModule )
      },
      {
        path:"products",
        loadChildren: () => import('./product-admin/product-admin.module').then(m =>m.ProductAdminModule )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
