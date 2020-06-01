import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder){ }

  // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
      // tslint:disable-next-line: only-arrow-functions
      particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
      });

      this.myForm = this.fb.group({
        email: ['', [
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
          Validators.max(65)
        ]]
      });
    }

    get email() {
      return this.myForm.get('email');
    }

    get password() {
      return this.myForm.get('password');
    }

    get age() {
      return this.myForm.get('age');
    }
  }


