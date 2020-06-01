import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Profile} from './profile';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }
  saveUsers(){
    return this.httpClient.post('http://localhost:4000/signup', {});
}

getProfile(){
  const headers = new Headers();
    // this.loadToken();

  headers.append('Content-Type', 'application/json');
  return this.httpClient.get('http://localhost:4000/signup/profile/:id').pipe(map((res: any) => res.json()));
}

// loadToken() {
  // const token = localStorage.getItem('id_token');
  // this.authToken = token;
// }
 getImage(){
  return this.httpClient.post('http://localhost:4000/profile/photo', {});
 }

postSpeaker(){
   return this.httpClient.post('http://localhost:4000/speaker/:id', {});
  }

postContact(){
  return this.httpClient.post('http://localhost:4000/contact/:id', {});
}
postVenue(){
  return this.httpClient.post('http://localhost:4000/venue/:id', {});
}
postSponsor(){
  return this.httpClient.post('http://localhost:4000/sponsor:id', {});
}

getLogin(){
      return this.httpClient.post('http://localhost:4000/login', {});
}
}
