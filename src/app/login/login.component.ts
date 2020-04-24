import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

declare let particlesJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // tslint:disable-next-line: only-arrow-functions
    particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
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

      /*street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')*/

    });
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

 /* get age() {
    return this.myForm.get('age');
  }*/


  }


