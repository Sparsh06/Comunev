import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {CommonserviceService} from '../commonservice.service';
import {Profile} from '../profile';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'
, './vendor/bootstrap/css/bootstrap.min.css'
, './css/styles.css'],
providers: [CommonserviceService]
})
export class ProfilePageComponent implements OnInit {
     profiles: Profile[];
     profile: Profile;
     firstname: string;
     email: string;


  constructor(private newSer: CommonserviceService) { }
 // NAME = 'Isabelle';
  // USERNAME = 'isabellesmith45';
   CITY = 'Chicago';
  url = 'https://www.bigstockphoto.com/images/homepage/module-6.jpg';

  Sumbit(){
    this.newSer.getProfile().subscribe(profiles => this.profiles = profiles);
  }

  ngOnInit() {
    this.newSer.getProfile().subscribe(profiles => this.profiles = profiles);
  }



  onselectFile(e){
    if (e.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

}
