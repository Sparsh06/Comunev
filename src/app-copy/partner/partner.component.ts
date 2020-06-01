import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
   partnerform = new FormGroup({
    fullname: new FormControl(''),

    email: new FormControl(''),

    contact:new FormControl(''),

    message:new FormControl(''),


   });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

}
  onSubmit(){
    
  }

  }


