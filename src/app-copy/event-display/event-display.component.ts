import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {

  constructor(private router:Router) {}
  about() {
    this.router.navigate(['event-display'], { fragment: 'About' });
  }
  venue() {
    this.router.navigate(['event-display'], { fragment: 'Venue' });
  }
  organizer() {
    this.router.navigate(['event-display'], { fragment: 'Organizer-details' });
  }
  gallery() {
    this.router.navigate(['event-display'], { fragment: 'Gallery' });
  }
  

  ngOnInit(): void {
  }

}
