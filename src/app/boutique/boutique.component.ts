import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import {  product } from 'src/types/items';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent {
  
  items = product

  checkboxes=[
    { checked: false, label: 'Jackets' },
    { checked: false, label: 'Sweatshirts & Hoodies' },
    { checked: false, label: 'T-Shirts' }
  ]

  constructor(private router :Router){

  }

onCheckboxChange(checkbox: any) {
  console.log('Checkbox:', checkbox.label);
  console.log('Checked:', checkbox.checked);
}

navigateToRoute(id:number){
    this.router.navigate(['/product',id])
  }
}
