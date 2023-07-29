import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../admin/users-dashboard/users-dashboard.component';
import { environment } from 'src/environments/environment';
import { produit } from 'src/types/produit.type';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http : HttpClient) { }

   public getUsers():Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(`${environment.APISPRING}users/getusers`);
  }
  
  public getProduits():Observable<any>{
    return this.http.get<any>(`${environment.APISPRING}produit/page/0`);
  }

  public getUsersAtPage(page : number):Observable<any>{
    return this.http.get<any>(`${environment.APISPRING}users/page/${page}`)
  }

  public getProduitAtPage(page:number):Observable<any>{
    return this.http.get<any>(`${environment.APISPRING}produit/page/${page}`)
  }
}


