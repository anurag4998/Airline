import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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

  checktime(departure_time)
  { 
    if(new Date(this.date).getDate() == new Date().getDate() )
    {
      if( parseInt(departure_time.substring(0,2)) - new Date().getHours() > 3)
        return true;
      else
        return false;
    }
    else 
      return true;
  }

  calculate_price(price)
  {
    let current_date = new Date()
    let travel_date = new Date(this.date)
    // let difference_time = travel_date.getTime() - current_date.getTime()
    let difference_days = (travel_date.getTime() - current_date.getTime())/(1000*3600*24)
    difference_days = (Math.round(difference_days))
    console.log(difference_days)
    if(difference_days <= 0)
      return price * 2; 
    else 
    return (price + price/difference_days).toFixed(0)

  }
  async onBookNow(flight_number:number,departure:string,arrival:string)
  {
    if(sessionStorage.getItem('user'))
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
    else {
      Swal.fire({
        icon:'warning',
        title: 'Oops!',
        text: 'Login to continue',
        showCancelButton: true,
        confirmButtonColor: '#049F0C',
        cancelButtonColor:'#ff0000',
        confirmButtonText: 'Take me to login',
        cancelButtonText: 'Maybe Later'
      }).then(async(result) => {
        if(result.value)
        {
          this.router.navigate([`${'/login'}`]);
        }
      })
    }
  }
}
