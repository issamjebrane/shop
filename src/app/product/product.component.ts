import { Component, OnInit } from '@angular/core';
import { items, product } from 'src/types/items';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  item!:items;
  id?:number;
  counter:number=1;
  constructor(private route:ActivatedRoute,private ProductsService:ProductsService){
    console.log()
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = +params['id']
      this.item=product[this.id]
    })
  }

  onPlusButton(){
    
    this.counter++
  }
  onMinusButton(){
    if(this.counter==0){
      this.counter==0
    }
    else{
      this.counter--
    }
  }
  ajouterPanier(){
    this.ProductsService.ajouterPanier()
  }
}
