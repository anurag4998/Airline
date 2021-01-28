import { Component, OnInit } from '@angular/core';
import {SearchflightService} from '../../services/searchflight.service'
@Component({
  selector: 'app-displayflight',
  templateUrl: './displayflight.component.html',
  styleUrls: ['./displayflight.component.css']
})
export class DisplayflightComponent implements OnInit {

  constructor(public service : SearchflightService) { }
  public flights =[]
  public departure:string
  public arrival:String
  ngOnInit(): void {
   this.flights = this.service.flightdata
   this.departure = this.service.departure_location
   this.arrival = this.service.arrival_location
   console.log(this.flights)
  
  }

}
