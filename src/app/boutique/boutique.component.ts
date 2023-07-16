import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { produit } from 'src/types/produit.type';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit{
  
  produits!:produit[]
  isDropdown:boolean=false

  checkboxes=[
    { checked: false, label: 'phone' },
    { checked: false, label: 'tv' },
    { checked: false, label: 'speaker' }
  ]

  constructor(private router :Router, private produitService : ProductsService
    ){
   
  }
 

  ngOnInit() {
    this.getProduits();
  }
 

  getProduits() {
    this.produitService.getProduits().subscribe(
      (data:produit[]) => {
        this.produits = data;
        this.produits.map(produit=>{
        })
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onCheckboxChange() {
    const checked  = this.checkboxes.filter((checkbox)=>{
      return checkbox.checked==true
    })
    const labels = checked.map(checked=>{
      return checked.label
    })
      this.produitService.filter(labels).subscribe((response:produit[])=>{
        this.produits=response
     })
  
  }

  navigateToRoute(id:number){
    this.router.navigate(['/product',id])
  }

  showDropdown(){
    this.isDropdown = !this.isDropdown
  }
  handleTrier(value:string){
    this.produitService.trier(value)
  }

  clearFilter(){
    window.location.reload()
  }
}
