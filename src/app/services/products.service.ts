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
  constructor(private http:HttpClient) { }

  getProduit(id:number):Observable<produit>{
    return this.http.get<produit>(`${environment.API}/produit/${id}`)
  }
  
  getProduits():Observable<produit[]>{
    return this.http.get<produit[]>(`${environment.API}/produits`)
  }
  
  ajouterPanier(){
    this.panier++
  }
  
  supprimerPanier(){
    this.panier--
  }

  trier(type:string){

  }

  filter(labels:string[]):Observable<produit[]>{
    const param = labels.join(',')
    
    return this.http.get<produit[]>(`${environment.API}/produits/${param}`,)
  }
}
