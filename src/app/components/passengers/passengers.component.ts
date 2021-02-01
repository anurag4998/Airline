import { Component, OnInit } from '@angular/core';
import {Passenger} from '../../models/passengers'
import {SelectedFlightService} from '../../services/selectedflight.service'
import {FetchSeatService} from '../../services/fetchseat.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  constructor(public flightselected:SelectedFlightService, public fetchseats:FetchSeatService,public router : Router ) { }

  public count :number;
  public flightselectobj:any
  public seatprice:number
  public totalprice:number
  passenger = new Passenger()
  public dataarray = []
 
    ngOnInit(): void {

        this.flightselectobj = this.flightselected.flightobj
        this.dataarray.push(this.passenger)
        this.count =1;
        this.fetchprice()
    }
      
      onAdd()
      {
        
        if(this.count<this.flightselected.number_of_seats)
        {
          this.passenger = new Passenger()
          this.dataarray.push(this.passenger)
          this.count++;
        }
        
      }
 
    async onSubmit()
      {
        this.fetchseats.number_of_seats = this.flightselected.number_of_seats
        this.fetchseats.seatclass = this.flightselected.travel_status == true?"business":"economy"
        await this.fetchseats.fetchseats(this.flightselected.flight_number,this.flightselected.travel_date)
        this.router.navigate([`${'flight/seats'}`]);

        console.log(this.dataarray)
      }

      async fetchprice() 
      {
        this.seatprice = await this.flightselected.getFlightPrice(this.flightselected.flight_number,this.flightselected.travel_status)
        this.seatprice = this.seatprice*this.flightselectobj.number_of_seats
        this.totalprice = this.seatprice+698+10
      } 
}
