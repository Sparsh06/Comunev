import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactform= new FormGroup({
     
    fullname: new FormControl(''),

      email: new FormControl(''),

      contact:new FormControl(''),

      message:new FormControl(''),

   });
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {

}
onSubmit() {
  
}
  
  }

