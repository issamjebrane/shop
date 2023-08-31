import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  addForm!:FormGroup

  constructor(private usersService:UsersService,private route : Router){}
  ngOnInit(): void {
    
    this.usersService.getUser(1)
    this.addForm=new FormGroup({
      nom: new FormControl("",Validators.required),
      prenom:new FormControl("",Validators.required),
      adresse:new FormControl("",Validators.required),
      ville:new FormControl("",Validators.required),
      email:new FormControl("",Validators.compose([
        Validators.email,
        Validators.required,
        Validators.pattern("^[A-Za-z0-9+_.-]+@(.+)$")
      ])),
      password:new FormControl("",Validators.required),
      num_tel:new FormControl("",Validators.required),
      is_admin:new FormControl("")
    })
  }

  updateUser(){

  }
}
