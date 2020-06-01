import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-become-a-speaker',
  templateUrl: './become-a-speaker.component.html',
  styleUrls: ['./become-a-speaker.component.css']
})
export class BecomeASpeakerComponent implements OnInit {
  speakerform= new FormGroup({
     
    fullname: new FormControl(''),

      email: new FormControl(''),

      contact:new FormControl(''),

      profile:new FormControl(''),

   });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

}
  onSubmit() {
   
}

}

