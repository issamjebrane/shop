import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  produit } from 'src/types/produit.type';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
produits!:produit[]

constructor(private router:Router,private productsService: ProductsService){}

ngOnInit() {
  this.getProduits();
}

getProduits() {
  this.productsService.getProduits().subscribe(
    (data:produit[]) => {
      this.produits = data.slice(0,3);
      this.produits.map(produit=>{
      })
    },
    (error: any) => {
      console.error(error);
    }
  );
}
navigateToRoute(id:number){
  this.router.navigate(['/product',id])
}
}
