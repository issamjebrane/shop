import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../admin/users-admin/users-dashboard/users-dashboard.component';
import { environment } from 'src/environments/environment';
import { users } from 'src/types/users.type';

export interface  product{
  ref : string;
  type : string;
  description: string;
  prix : number;
  image : string;
}
@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  constructor(private http : HttpClient) { }

   public getUsers():Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(`${environment.APISPRING}users/getusers`);
  }
  
  public getProduits():Observable<any>{
    return this.http.get<any>(`${environment.APISPRING}produits/getproduits`);
  }

  public getUsersAtPage(page : number):Observable<any>{
    return this.http.get<any>(`${environment.APISPRING}users/page/${page}`)
  }

  public getProduitAtPage(page:number):Observable<any>{
    return this.http.get<any>(`${environment.APISPRING}produits/page/${page}`)
  }
  public addProduct(value:product){
    const regex = /\\([^\\]+)$/; 
    const match = value.image.match(regex)
    if(match){
      value.image = match[1]
    }
    return this.http.post(`${environment.APISPRING}produits/save`,value)
  }

  public addUser(value:users){  
    return this.http.post(`${environment.APISPRING}users/register`,value)
  }
  public deleteUser(id:number){
    return this.http.delete(`${environment.APISPRING}users/delete/${id}`,{ responseType: "text" })
  }
}


