import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {SearchflightService} from '../../services/searchflight.service'
import {SelectedFlightService} from '../../services/selectedflight.service'

@Component({
  selector: 'app-airplanecard',
  templateUrl: './airplanecard.component.html',
  styleUrls: ['./airplanecard.component.css']
})
export class AirplanecardComponent implements OnInit {
  @Input() flightdetails: any;
  @Input() classstate:boolean;
  constructor(public service : SearchflightService, public flightselected:SelectedFlightService, public router : Router ) { }
  public date:Date
  public seats :number
 
  public color = 'green'
  ngOnInit(): void {
    this.date = this.service.date
    this.seats = this.service.seats
  }
  async onBookNow(flight_number:number,departure:string,arrival:string)
  {
      await this.flightselected.postdata(
        {
          "departure_location":departure,
          "arrival_location":arrival,
          "flight_number":flight_number,
          "travel_date":this.date,
          "number_of_seats":this.seats,
          "classstate":this.classstate
        })

        this.router.navigate([`${'flight/passengers'}`]);

  }
}
