import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ProductComponent } from './product/product.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'boutique',
    component:BoutiqueComponent
  },{
    path:'product/:id',
    component:ProductComponent
  },
  {
    path:'panier',
    component:PanierComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
