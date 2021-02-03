import { Component, OnInit } from '@angular/core';
import {SearchflightService} from '../../services/searchflight.service'
import { faUser } from '@fortawesome/free-solid-svg-icons';
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
  public classstate:boolean= false
  faUser=faUser
  public isLoggedIn: boolean
  ngOnInit(): void {
    if(!sessionStorage.getItem('user'))
    {
        this.isLoggedIn = true
    }
    
   this.flights = this.service.flightdata
   this.departure = this.service.departure_location
   this.arrival = this.service.arrival_location  
  }
  toggle()
  {
     this.classstate =  !this.classstate
  }
}
