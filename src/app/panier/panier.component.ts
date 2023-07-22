import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { produit } from 'src/types/produit.type';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit{
  prix:number=0
  total:number=0
  produits:produit[]=[]

  constructor(private produitsService:ProductsService){
   
  }
  
  getQuantity(id:number){
     return this.produitsService.produits.find(element=>element.id===id)?.quantity
  }

  ngOnInit(): void {
    this.produitsService.getPanier()?.subscribe(data=>{
      this.produits=data
      this.getTotal()
    })
  }

  getTotal(){
    if(this.produits.length>0){
      this.produits.map(element=>{
        const quantity = this.getQuantity(element.id) 
        if(quantity){
          this.prix+= quantity*element.prix
        }
      })
    }
  }

  clearPanier(){
    this.produits=[]
    this.produitsService.panier=0
  }
}
