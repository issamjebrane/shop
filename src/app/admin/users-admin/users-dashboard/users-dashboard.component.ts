import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';


export interface UserInterface{
  id:number;
  nom : string;
  prenom:string;
  adresse?: string ;
  ville?:string ;
  num_tel:number;
  numTel:number;
  email:string;
  password:string;
  is_admin?:boolean ;
  isAdmin?:boolean;
  dropdown:boolean;
}

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})


export class UsersDashboardComponent implements OnInit{

  users:UserInterface[]=[];
  keys:string[]=[];
  page:number=0
  numberOfElements:number=6
  entries:number=0;
  constructor(private adminService : AdminService,private route:Router){
    
  }

  ngOnInit(): void {
    this.getUsers();
  }
  addUser(){
    this.route.navigate(['admin/users/adduser'])
  }


  public getUsers(){
    this.adminService.getUsers().subscribe((response:UserInterface[])=>{
      this.users=response.slice(0,6)
      this.keys=Object.keys(this.users[0]);
      this.keys.pop();
      this.users.forEach(user => {
        user.dropdown=true
      });
      this.entries=response.length
    },(error)=>{
      console.log("error fetching data")
    });
  }
  getToPage(page:number){
    if(page == -1){
      return
    } 
    this.adminService.getUsersAtPage(page).subscribe((data)=>{
      if(data.content.length === 0){return }
    this.users =data.content
    this.page=page
    this.numberOfElements=data.numberOfElements
    this.users.forEach(user => {
      user.dropdown=true
    });
    })
  }

  showDropdown(user:UserInterface){
    user.dropdown=!user.dropdown
  }

  deleteUser(id:number){
    this.adminService.deleteUser(id).subscribe(response=>{
      if(response==="deleted"){
        this.getToPage(1)
      }
    },error=>{
      console.log(error)
    })
  }
  updateUser(id:number){
    this.route.navigate([`/admin/users/updateuser/${id}`])
  }
}
