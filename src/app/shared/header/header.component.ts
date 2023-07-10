import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isDropdown:boolean=false
  
  constructor(protected ProductsService:ProductsService,private router :Router){
    
  }

  navigateLogin(){
    this.router.navigate(['/login'])
  }
  navigatePanier(){
    this.router.navigate(['/panier'])
  }
  showDropdown(){
    this.isDropdown = !this.isDropdown
  }
}
