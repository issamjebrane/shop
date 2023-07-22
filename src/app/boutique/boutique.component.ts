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
  page:number=0
  isLoading:boolean=false
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
    this.isLoading=true
    this.produitService.getProduits().subscribe(
      (data:produit[]) => {
        this.produits = data.slice(0,6);
        this.isLoading=false
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
    if(checked.length==0){
      this.getProduits()
      return 
    }
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

  getToPage(page:number){
    if(page == -1){
      return
    } 
    this.produitService.getProduitAtPage(page).subscribe((data:produit[])=>{
      this.produits=data
      this.isLoading=false
      this.page=page
    })
  }
}
