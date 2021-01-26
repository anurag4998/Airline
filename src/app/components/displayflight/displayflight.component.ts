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
  ngOnInit(): void {
   this.flights = this.service.flightdata
   console.log(this.flights)
  
  }

}
