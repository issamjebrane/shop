import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  addForm!:FormGroup

  constructor(private adminService:AdminService,private route : Router){}
  ngOnInit(): void {
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

  addUser(){
    this.adminService.addUser(this.addForm.value).subscribe(response=>{
      alert('user added succesfully')
      this.route.navigate(['/admin/users'])
    },error=>{
      console.log(error)
    })
  }
}
