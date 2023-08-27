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
  counter:number=1;
  constructor(private produitsService:ProductsService){}
  
  getQuantity(id:number):number{
    let quantity= this.produitsService.produits.find(element=>element.id===id)?.quantity
     return quantity ? quantity : 0;
  }

  ngOnInit(): void {
    this.produitsService.getPanier()?.subscribe(data=>{
      this.products=data
      this.getTotal()
    })
  }

  getTotal(){
    this.prix=0
    if(this.products.length>0){
      this.products.map(element=>{
        const quantity = this.getQuantity(element.id) 
        if(quantity){
          this.prix+= quantity*element.prix
        }
      })
    }
  }
  getSubtotal(price:number,id:number):number{
    return price * this.getQuantity(id)
  }
  clearPanier(){
    this.products=[]
    this.produitsService.panier=0
  }
  deleteItem(id:number){
    this.products = this.produitsService.deleteItem(id,this.products);
    this.getTotal();
  }
  onPlusButton(id:number){
    this.produitsService.onPlusButton(id);
    this.getTotal();
  }
  onMinusButton(id:number){
    this.produitsService.onMinusButton(id);
    if(this.getQuantity(id)==0){
      this.deleteItem(id)
    }
    this.getTotal();
    
  }
}

