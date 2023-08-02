import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from 'src/types/product.type';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit{
  prix:number=0
  total:number=0
  products:product[]=[]

  constructor(private produitsService:ProductsService){
   
  }
  
  getQuantity(id:number){
     return this.produitsService.produits.find(element=>element.id===id)?.quantity
  }

  ngOnInit(): void {
    this.produitsService.getPanier()?.subscribe(data=>{
      this.products=data
      this.getTotal()
    })
  }

  getTotal(){
    if(this.products.length>0){
      this.products.map(element=>{
        const quantity = this.getQuantity(element.id) 
        if(quantity){
          this.prix+= quantity*element.prix
        }
      })
    }
  }

  clearPanier(){
    this.products=[]
    this.produitsService.panier=0
  }
}
