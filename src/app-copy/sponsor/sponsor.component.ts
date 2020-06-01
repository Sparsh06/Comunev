import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {CommonserviceService} from '../commonservice.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  myForm: FormGroup;
  sponsorform = new FormGroup({
    fullname: new FormControl(''),

    email: new FormControl(''),

    contact: new FormControl(''),

    details: new FormControl(''),
  });
  constructor(private fb: FormBuilder,
              private newSer: CommonserviceService) { }
repdata;
  ngOnInit(): void {
  }


  onSubmit(){
this.newSer.postSponsor().subscribe(data => this.repdata = data);
  }
}


