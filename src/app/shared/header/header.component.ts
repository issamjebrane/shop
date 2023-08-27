import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {  Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import {  users } from 'src/types/users.type';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user = {
    nom :'',
    prenom :'',
    isAdmin:false,
  }
  paramValue!: string;
  isMobile:boolean=false
  isDropdown:boolean=false
  searchValue:string=''
  
  constructor(
    protected ProductsService:ProductsService,
    private router :Router,
    protected usersService:UsersService,
    protected authService:AuthService
    ){
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        const parsedData:users = JSON.parse(storedData);
        this.user.nom = parsedData.nom
        this.user.prenom= parsedData.prenom   
        this.user.isAdmin= parsedData.isAdmin 
      } 
    }

  ngOnInit(): void {
  }
  
  navigateLogin(){
    this.isMobile=false
    this.isDropdown=false
    this.router.navigate(['/login'])
  }

  navigatePanier(id:number){
    this.isMobile=false
    this.isDropdown=false
    if(id===1){
      this.showDropdown()
    }
    this.router.navigate(['/panier'])
  }

  navigateBoutique(id:number){
    this.isMobile=false
    this.isDropdown=false
    if(id===1){
      this.showDropdown()
    }
    this.router.navigate(['/boutique'])
  }
  
  navigateCheckout(id:number){
    this.isMobile=false
    this.isDropdown=false
    if(id===1){
      this.showDropdown()
    }
    this.router.navigate(['/checkout'])

  }
  
  navigateHome(){
    this.isMobile=false
    this.isDropdown=false
    this.router.navigate(['/'])
  }

  showDropdown(){
    this.isDropdown = !this.isDropdown
  }

  handleSearch(searchValue : string){
    this.searchValue=searchValue
  }

  logout(){
    this.usersService.logout()
  }

  showNavDropDown(){
    this.isMobile=!this.isMobile;
  }
}
