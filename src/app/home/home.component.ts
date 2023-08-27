import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  product } from 'src/types/product.type';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
products!:product[]
product?:product;
isOpacity:boolean=false;
public filterInterval:any;
constructor(private router:Router,private productsService: ProductsService){}

ngOnInit() {
  this.getProduits();
}

getProduits() {
  this.productsService.getProduits().subscribe(
    (data:product[]) => {
      this.products = data.slice(0,4);
      this.product=this.products[0];
      this.product.image="../../".concat(this.product.image);
      this.alterImages();
    },
    (error: any) => {
      console.error(error);
    }
  );
}
productPagination(product:product){
  this.product=product;
  clearInterval(this.filterInterval)
}
alterImages(){
    let i = 0;
    
  this.filterInterval= setInterval(()=>{
      i=(i+1)%4;
      this.product=this.products[i];
    },5000)    
}
  navigateToRoute(id:number|undefined){
    this.router.navigate(['/product',id])
  }
  navigateToStore(){
    this.router.navigate(['/boutique'])
  }
}
