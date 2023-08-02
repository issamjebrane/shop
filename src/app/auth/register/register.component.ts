import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from 'src/app/admin/users-dashboard/users-dashboard.component';
import { catchError, switchMap, throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  userForm!:FormGroup
  constructor(private router :Router,private usersService : UsersService,private authService:AuthService){}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      nom:new FormControl("",Validators.required) ,
      prenom:new FormControl("",Validators.required) ,
      numTel:new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern('^\\d{0,10}$')
      ])),
      email:new FormControl("",Validators.compose([
       Validators.required,
       Validators.email,
       Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
      ])),
      password:new FormControl("",Validators.required)
     })
  }
  navigateLogin(){
    this.router.navigate(['/login'])
  }

  register(){
    const value = this.userForm.value
    this.usersService.register(value).pipe(
      switchMap((response: UserInterface) => {
        // Register successful, now login
        return this.usersService.login(response.email, response.password).pipe(
          catchError((error) => {
            // Handle login error
            alert('Email or password is incorrect');
            return throwError(error);
          })
        );
      })
    ).subscribe((response) => {
      // Login successful, set token and user
      this.authService.setToken(response.accessToken);
      this.usersService.setUser(response.result);
      this.router.navigate(['/']);
    }, (error) => {
      // Handle registration error
      console.error(error);
    });
  }
}
