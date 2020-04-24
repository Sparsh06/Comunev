import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


declare let particlesJS: any;


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  particlesJS.load('particles-js', 'assets/particles.json', () => {
    console.log('callback - particles.js config loaded');
  });
  this.myForm = this.fb.group({
    /* email: ['', [
       Validators.required,
       Validators.email
     ]],
     password: ['', [
       Validators.required,
       Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
     ]],
     age: [null, [
       Validators.required,
       Validators.minLength(2),
       Validators.min(18),
       Validators.max(65)*/
       email: new FormControl(''),
   password: new FormControl(''),
   Retype : new FormControl(''),
   Firstname: new FormControl(''),
   lastname: new FormControl('')



     /*street: new FormControl(''),
     city: new FormControl(''),
     state: new FormControl(''),
     zip: new FormControl('')*/

   });
 }

 get Retype(){
   return this.myForm.get('Retype');
 }

 get email() {
   return this.myForm.get('email');
 }

 get password() {
   return this.myForm.get('password');
 }
 get Firstname() {
  return this.myForm.get('Firstname');
}

get lastname() {
  return this.myForm.get('lastname');
}



}
