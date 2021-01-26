import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-airplanecard',
  templateUrl: './airplanecard.component.html',
  styleUrls: ['./airplanecard.component.css']
})
export class AirplanecardComponent implements OnInit {
  @Input() flightdetails: any;
  constructor() { }
  public color = 'green'
  ngOnInit(): void {
  }

}
