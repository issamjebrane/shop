import { Component } from '@angular/core';
import { items } from 'src/types/items';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent {
  checkboxes=[
    { checked: false, label: 'Jackets' },
    { checked: false, label: 'Sweatshirts & Hoodies' },
    { checked: false, label: 'T-Shirts' }
  ]
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
    {
    id:4,
    img:'assets/nike-black.jpeg',
    desc:'produit 4'
  },
    {
    id:5,
    img:'assets/nike-black.jpeg',
    desc:'produit 5'
  },
    {
    id:6,
    img:'assets/nike-black.jpeg',
    desc:'produit 6'
  }
]

onCheckboxChange(checkbox: any) {
  console.log('Checkbox:', checkbox.label);
  console.log('Checked:', checkbox.checked);
}

}
