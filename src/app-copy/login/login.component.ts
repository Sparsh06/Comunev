import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginform= new FormGroup({
     
    username: new FormControl(''),
    password: new FormControl(''),

   });
  constructor(private fb:FormBuilder) { }



  ngOnInit(): void {
    // tslint:disable-next-line: only-arrow-functions
    
  }
  onSubmit() {
    
    
  }

 
  }


