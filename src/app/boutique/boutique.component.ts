import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from 'src/types/product.type';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit{
  
  products!:product[]
  isDropdown:boolean=false
  page:number=0
  isLoading:boolean=false
  checkboxes=[
    { checked: false, label: 'phone' },
    { checked: false, label: 'tv' },
    { checked: false, label: 'speaker' }
  ]

  constructor(private router :Router, private produitService : ProductsService,private adminService:AdminService ){}
 

  ngOnInit() {
    this.getProduits();
  }
 

  getProduits() {
    this.isLoading=true
    this.produitService.getProduits().subscribe(
      (data:product[]) => {
        this.products = data.slice(0,6);
        // console.log(this.products)
        this.isLoading=false
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  
  //this function for filtering between the three types provided
  onCheckboxChange() {
    const checked  = this.checkboxes.filter((checkbox)=>{
      return checkbox.checked==true
    }) // get all the checked checkboxes
    if(checked.length==0){
      this.getProduits()
      return 
    }
    const labels = checked.map(checked=>checked.label)
      this.produitService.filterSpringBoot(labels).subscribe((response:product[])=>{
        this.products=response
     }) //returning all products which there type is selected 
  
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
    this.adminService.getProduitAtPage(page).subscribe((data)=>{
      if(data.content.length==0){return}
      this.products=data.content
      this.isLoading=false
      this.page=page
    })
  }
}
