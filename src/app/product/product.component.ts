import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { produit } from 'src/types/produit.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  produit?:produit;
  id?:number;
  counter:number=1;
  constructor(private route:ActivatedRoute,private produitsService:ProductsService){
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = +params['id']
      this.produitsService.getProduit(this.id).subscribe((data:produit)=>{
        this.produit = data
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
