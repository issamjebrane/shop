import { Injectable } from '@angular/core';
import { produit } from 'src/types/produit.type';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  panier:number=0;
  produits:{
    id:number|undefined,
    quantity:number
  }[]=[
    
  ]
  constructor(private http:HttpClient) { }

  getProduit(id:number):Observable<produit>{
    return this.http.get<produit>(`${environment.API}/produits/produit/${id}`)
  }
  
  getProduits():Observable<produit[]>{
    return this.http.get<produit[]>(`${environment.API}/produits`)
  }
  
  getProduitAtPage(page:number):Observable<produit[]>{
    return this.http.get<produit[]>(`${environment.API}/produits/page/${page}`)
  }

  ajouterPanier(id:number|undefined,quantity:number){
    const product = {id,quantity}
    
    const index  = this.produits.findIndex(produit=>{
      return produit.id === product.id
    })
    if(this.produits.length==0){
      this.produits.push(product)
    }
    else if(index!=-1){
      this.produits[index].quantity+=product.quantity
    }
    else {
      this.produits.push(product)
    }
    this.panier= this.getTotalQuantity(this.produits)
  }
  
  supprimerPanier(){
    this.panier--
  }

   getTotalQuantity = (array:{
    id:number|undefined,
    quantity:number
  }[]) => {
    return array.reduce((total, element) => total + element.quantity, 0);
  };

  trier(type:string){

  }

  filter(labels:string[]):Observable<produit[]>{
    const param = labels.join(',')
    
    return this.http.get<produit[]>(`${environment.API}/produits/produit/${param}`,)
  }

  getPanier():Observable<produit[]> |undefined{
    const id = this.produits.map(produit=>produit.id).join(",")
    if(this.produits.length>0){
    return this.http.get<produit[]>(`${environment.API}/produits/id/${id}`)
  }
    return
  }
}
