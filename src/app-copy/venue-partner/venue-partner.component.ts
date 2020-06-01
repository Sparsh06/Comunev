import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {CommonserviceService} from '../commonservice.service';



@Component({
  selector: 'app-venue-partner',
  templateUrl: './venue-partner.component.html',
  styleUrls: ['./venue-partner.component.css']
})
export class VenuePartnerComponent implements OnInit {
  venueform = new FormGroup({
    fullname: new FormControl(''),

    email: new FormControl(''),

    contact: new FormControl(''),

    details: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private newSer: CommonserviceService) { }
  repdata;
  ngOnInit(): void {
    this.newSer.postVenue().subscribe(data => this.repdata = data);
}

onSubmit(){

}

}


