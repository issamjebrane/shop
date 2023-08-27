import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper: JwtHelperService;

  constructor() {
    this.jwtHelper = new JwtHelperService();
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public setToken(token: string): void {
    
    localStorage.setItem('token', token);
  }

  public removeToken(): void {
    localStorage.removeItem('token');
  
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  public setUser(userdata : {id:number,nom:string,prenom:string,isAdmin:boolean}){
    localStorage.setItem('userData', JSON.stringify(userdata))
  }

  public removeUser(){
    localStorage.removeItem('userData')
  }

  public getId(){
    const token  = this.getToken()
    if(token != null){
      this.jwtHelper.decodeToken(token)
    }
  }
}
