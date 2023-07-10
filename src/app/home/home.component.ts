import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { items } from 'src/types/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items:items[]=[
    {
    id:1,
    img:'assets/nike-black.jpeg',
    desc:'produit 1'
  },
    {
    id:2,
    img:'assets/nike-red.jpeg',
    desc:'produit 2'
  },
    {
    id:3,
    img:'assets/nike-black.jpeg',
    desc:'produit 3'
  },
]

constructor(private router:Router){}

navigateToRoute(id:number){
  this.router.navigate(['/product',id])
}
}
