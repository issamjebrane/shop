import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { users } from 'src/types/users.type';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  isAdmin:boolean=false;
  isLoggedIn:boolean=false;
  private user! : users
  constructor(private http:HttpClient,private router : Router,private authservice : AuthService) { }
  
  login(email:string, password:string ):Observable<any> {
    const body ={
      "email":email,
      "password":password
    }
    
    return this.http.post(`${environment.API}/users/login`, body)
  }
  logout(){
      this.router.navigate(['/login']);
      this.authservice.removeToken()
      this.authservice.removeUser()
  }
  setUser(user : users){
    const userdata = {id:user.id,nom:user.nom,prenom : user.prenom,isAdmin:user.isAdmin}
    this.authservice.setUser(userdata)
  }
  getUser():users{
    return this.user
  }

  register(value:users):Observable<any>{
    const data ={
      "nom":value.nom,
      "prenom":value.prenom,
      "numTel":value.numTel,
      "email":value.email,
      "password":value.password
    }
    return this.http.post<any>(`${environment.API}/users/register`,data)
  }
}
