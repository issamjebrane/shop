import { Injectable } from '@angular/core';
import { items, product } from 'src/types/items';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  panier:number=0;
  constructor() { }

  getProduct(id:number):items{
   return product[id]
  }

  ajouterPanier(){
    this.panier++
  }
  supprimerPanier(){
    this.panier--
  }

}
