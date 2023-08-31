import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { product } from 'src/types/product.type';



@Component({
  selector: 'app-produit-dashboard',
  templateUrl: './produit-dashboard.component.html',
  styleUrls: ['./produit-dashboard.component.css']
})
export class ProduitDashboardComponent implements OnInit{

  products:product[]=[];
  page:number=0;
  keys:string[]=[];
  numberOfElements:number=6
  entries:number=0;
  constructor(private adminService : AdminService,private route:Router){}

  ngOnInit(): void {
    this.getAllProduit();
  }

  addProduct(){
    this.route.navigate(['/admin/products/addproduct'])
  }

  getAllProduit(){
    this.adminService.getProduits().subscribe(response=>{
      this.products=response.slice(0,6)
      this.keys=Object.keys(this.products[0]);
      this.entries=response.length
    });
  }

  getToPage(page:number){
    if(page == -1){
      return
    } 
    this.adminService.getProduitAtPage(page).subscribe((data)=>{
      if(data.content.length === 0){return }
      this.products=data.content
      this.page=page
      this.numberOfElements=data.numberOfElements
    })
  }
}
