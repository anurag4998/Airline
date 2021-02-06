import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchflightService } from 'src/app/services/searchflight.service';
import { SelectedFlightService } from 'src/app/services/selectedflight.service';
import { TransactionService } from 'src/app/services/transaction.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-eticket',
  templateUrl: './eticket.component.html',
  styleUrls: ['./eticket.component.css']
})
export class EticketComponent implements OnInit {
  public eticketdetails;
  flights: any[];
  departure: string;
  arrival: string;
  passengers: any;
  amount: any;

  public noofseats

  flight_number: number;
  travel_date: any;
  transaction_id: any;
  booking_date: any;
  arrival_time: any;
  departure_time: any;

  constructor(private eticket:TransactionService, private searchservice:SearchflightService,public flightselected:SelectedFlightService,private router:Router) { }

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
    for(let i=0; i<this.searchservice.flightdata.length;i++)
    {
      if(this.searchservice.flightdata[i].flight_number==this.flightselected.flight_number)
      {
        this.departure_time=this.searchservice.flightdata[i].departure_time
        this.arrival_time=this.searchservice.flightdata[i].arrival_time
      }
    }
    this.flight_number= this.flightselected.flight_number
    this.departure = this.searchservice.departure_location
    this.travel_date=this.eticket.booked_information.travel_date.substring(0,10)
    this.arrival = this.searchservice.arrival_location  
    this.passengers=this.eticket.booked_information.passengers
    this.amount=this.eticket.booked_information.amount
    this.transaction_id=this.eticket.booked_information.transaction_id
    this.booking_date=this.eticket.booked_information.booking_date.substring(0,10)
   

  }
}
