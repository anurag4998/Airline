import { Component, OnInit } from '@angular/core';
import {Passenger} from '../../models/passengers'
import {SelectedFlightService} from '../../services/selectedflight.service'
import {FetchSeatService} from '../../services/fetchseat.service'
import { Router } from '@angular/router';
import {TransactionService} from '../../services/transaction.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  constructor(public flightselected:SelectedFlightService, public fetchseats:FetchSeatService,public router : Router,public TransactionService:TransactionService ) { }

  public count :number;
  public flightselectobj:any
  public seatprice
  public totalprice:number
  passenger = new Passenger()
  public isLoggedIn: boolean = false

  public dataarray = []
 
    ngOnInit(): void {
      if(!sessionStorage.getItem('user'))
      {
        Swal.fire({
          title: 'Oops!',
          text: 'Login to Continue!',
          icon: 'warning',
         
        })
        this.router.navigate([`${'/login'}`]);
      }
        else 
        {
        this.isLoggedIn = true
        }
      
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
        this.TransactionService.passengers = this.dataarray
        this.TransactionService.final_amount = this.totalprice
      }

      async fetchprice() 
      {
        this.seatprice = await this.flightselected.getFlightPrice(this.flightselected.flight_number,this.flightselected.travel_status)

        console.log(this.flightselected.travel_date)
        let current_date = new Date()
        let travel_date = new Date(this.flightselected.travel_date)
        let difference_days = (travel_date.getTime() - current_date.getTime())/(1000*3600*24)
        difference_days = (Math.round(difference_days))
        if(difference_days <= 0) 
          this.seatprice = this.seatprice * 2
        else 
          this.seatprice = (this.seatprice + (this.seatprice/difference_days)).toFixed(0)
        this.seatprice = this.seatprice*this.flightselectobj.number_of_seats
        this.totalprice = this.seatprice+698+10
      } 
}
