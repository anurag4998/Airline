import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {BookingHistoryService} from '../../../services/bookinghistory.service'
@Component({
  selector: 'app-flightdata',
  templateUrl: './flightdata.component.html',
  styleUrls: ['./flightdata.component.css']
})
export class FlightdataComponent implements OnInit {

  constructor(private bookinghistoryservice : BookingHistoryService,private router:Router) { }
  public bookedtickets = []
  async ngOnInit() {
    if(!sessionStorage.getItem('user'))
    {
      Swal.fire({
        title: 'Oops!',
        text: 'Login to Continue!',
        icon: 'warning',
       
      })
      this.router.navigate([`${'/login'}`]);
    }
    await this.bookinghistoryservice.getbookeddata()
    this.bookedtickets = this.bookinghistoryservice.bookedtickets
  }
  async oncancel(id)   {
    console.log(id)
    let current_date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
    Swal.fire({
      icon:'warning',
      title: 'Are you sure to cancel this ticket?',
      text: 'You will not be able to revert this ',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor:'#ff0000',
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'Keep my reservation'
    }).then(async(result) => {
      console.log(result)
      if(result.value)
      {
        let a = await this.bookinghistoryservice.cancelticket(id,current_date)
        await this.bookinghistoryservice.getbookeddata()
        this.bookedtickets = this.bookinghistoryservice.bookedtickets
        if(a==false)
        {
          Swal.fire(
            'Oops',
            'Your Ticket was not deleted ! try again later :)',
            'error'
          )
        }
      }
      
      else if(result.dismiss === Swal.DismissReason.cancel) 
        {
          Swal.fire(
            'Woohoo',
            'Your Travel is still on :)',
            'success'
          )
        }
    })  
  }
  checktime(departure_time,travel_date)
  { 
    if(new Date(travel_date).getTime() - new Date().getTime() < 0 )
      return false;

    if((new Date(travel_date).getDay() == new Date().getDay()))
      {
        if( parseInt(departure_time.substring(0,2)) - new Date().getHours() > 3)
          return true;
        else
        return false;
      }
    

    if((new Date(travel_date).getTime() - new Date().getTime() > 0))
      return true

      
  }
} 
