import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from 'src/types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  product?:product;
  id?:number;
  counter:number=1;
  isLoading:boolean=false;
  constructor(private route:ActivatedRoute,private produitsService:ProductsService){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = +params['id'];
      this.isLoading=true;
      this.produitsService.getProduit(this.id).subscribe((data:product)=>{
        this.product = data;
        this.isLoading=false;
      })
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
    ajouterPanier(id:number | undefined){
      this.produitsService.ajouterPanier(id,this.counter)
    }
}
