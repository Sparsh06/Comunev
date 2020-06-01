import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  hide=true
  showUpcoming(){
    this.hide=false
    this.hide2=true
  }

  hide2=true
  showpast(){
     this.hide=true
     this.hide2=false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
