import { Component, OnInit, Input } from '@angular/core';
import {SearchflightService} from '../../services/searchflight.service'

@Component({
  selector: 'app-airplanecard',
  templateUrl: './airplanecard.component.html',
  styleUrls: ['./airplanecard.component.css']
})
export class AirplanecardComponent implements OnInit {
  @Input() flightdetails: any;
  constructor(public service : SearchflightService) { }
  public date:Date
  public seats :number
 
  public color = 'green'
  ngOnInit(): void {
    this.date = this.service.date
    this.seats = this.service.seats
  }
  onBookNow(flight_number,departure,arrival)
  {
    console.log(this.date,this.seats,flight_number,departure,arrival)
  }
}
