import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{

  isFocused:boolean=true;
  constructor(private route : Router,private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    if(this.route.url.includes("product")){
      this.isFocused=true
    }else{
      this.isFocused=false
    }
}

  navigateToUsers(){
    this.route.navigate(["admin/users"])
    this.isFocused=false
  }
  navigateToProduits(){
    this.route.navigate(["admin/products"])
    this.isFocused=true;
  }
   
}
 