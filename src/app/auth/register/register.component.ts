import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  userForm!:FormGroup
  constructor(private router :Router,private usersService : UsersService){}

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
     this.usersService.register(value).subscribe((response)=>{
      console.log(response)
    },
    (error)=>{
      console.error(error)
    })
  }
}
