import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoutiqueComponent } from './boutique/boutique.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'boutique',
    component:BoutiqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
