import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  constructor(private adminService:AdminService,private route : Router){}

  addForm!:FormGroup;
  ngOnInit(): void {
    this.addForm=new FormGroup({
      ref: new FormControl("",Validators.required),
      type:new FormControl("",Validators.required),
      description:new FormControl("",Validators.required),
      prix:new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ])),
      image:new FormControl()
    })
  }

  addProduct(){
    this.adminService.addProduct(this.addForm.value).subscribe(response=>{
      console.log(response)
      alert('product added succesfully');
      this.route.navigate(['admin/products'])
    },(error)=>{
      console.log(error)
    })
  }
}
