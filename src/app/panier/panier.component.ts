import { Component } from '@angular/core';
import { product } from 'src/types/items';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {

  produits=product.slice(0,2);
}
