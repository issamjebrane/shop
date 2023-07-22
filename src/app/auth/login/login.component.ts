import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userForm!: FormGroup
  email!:string;
  password!:string;

  constructor(private router :Router,private usersService:UsersService,private authService:AuthService){}

  ngOnInit(): void {
    this.userForm=new FormGroup({
      email: new FormControl("",Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
      ])),
      password:new FormControl("",Validators.required)
    })
  }

  navigateRegister(){
   this.router.navigate(['/register'])
  }

  login(){
    const val = this.userForm.value
    this.usersService.login(val.email,val.password)
      .subscribe(
        response=>{
        this.authService.setToken(response.accessToken)
        this.usersService.setUser(response.result)
        this.router.navigate(['/'])
      },
      error=>{
        alert("email or password is incorrect")
        window.location.reload()
      }
      )
  }
}
