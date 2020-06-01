import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {CommonserviceService} from '../commonservice.service';
// tslint:disable-next-line: import-spacing
import  {Profile} from '../profile';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform = new FormGroup({
    firstname: new FormControl(''),

    lastname: new FormControl(''),

    email: new FormControl(''),

    password: new FormControl(''),

    retype: new FormControl(''),


   });

   emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private fb: FormBuilder, private newSer: CommonserviceService) { }
 repdata;
  ngOnInit(): void {

  }
  onSubmit(){
    this.newSer.saveUsers().subscribe(data => this.repdata = data);

  }
}






