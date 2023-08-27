import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitDashboardComponent } from './produit-dashboard/produit-dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    path:"",
    component:ProduitDashboardComponent
  },
  {
    path:"addproduct",
    component:AddProductComponent
  },
  {
    path:"updateproduct/:id",
    component:UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductAdminRoutingModule { }
