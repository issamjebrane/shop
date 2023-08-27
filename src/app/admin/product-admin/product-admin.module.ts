import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAdminRoutingModule } from './product-admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProduitDashboardComponent } from './produit-dashboard/produit-dashboard.component';


@NgModule({
  declarations: [
    AddProductComponent,
    UpdateProductComponent,
    ProduitDashboardComponent
  ],
  imports: [
    CommonModule,
    ProductAdminRoutingModule
  ]
})
export class ProductAdminModule { }
