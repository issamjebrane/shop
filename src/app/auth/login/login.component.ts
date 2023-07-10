import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user:any;

  constructor(private router :Router,private UsersService:UsersService){}

  navigateRegister(){
   this.router.navigate(['/register'])
  }
}
