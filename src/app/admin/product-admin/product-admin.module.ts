import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdminRoutingModule } from './product-admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProduitDashboardComponent } from './produit-dashboard/produit-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddProductComponent,
    UpdateProductComponent,
    ProduitDashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductAdminRoutingModule
  ]
})
export class ProductAdminModule { }
