import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adminflight } from 'src/app/models/adminflight';
import { AdminflightcrudService } from 'src/app/services/adminflightcrud.service';
import { AirportsService } from 'src/app/services/airports.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {
  public citydata;
  updateflight:Adminflight;
  isLoggedIn: boolean;
  constructor(private service:AdminflightcrudService,private router:ActivatedRoute,private airportservice : AirportsService, private routers: Router) { }

  ngOnInit(): void {
    this.service.getByflightnumber(this.router.snapshot.params['flightnumber']).subscribe((data)=>
    this.updateflight={
      flight_number:data["flight_number"],
      departure_location:data["departure_location"],
      arrival_location:data["arrival_location"],
      Monday:data["Monday"],
      Tuesday:data["Tuesday"],
      Wednesday:data["Wednesday"],
      Thursday:data["Thursday"],
      Friday:data["Friday"],
      Saturday:data["Saturday"],
      Sunday:data["Sunday"],
      departure_time:data["departure_time"],
      arrival_time:data["arrival_time"],
      duration:data["duration"],
      business_cost:data["business_cost"],
      economy_cost:data["economy_cost"]
      }
      
    )
    this.citydata = this.airportservice.airports;
    if(!sessionStorage.getItem('admin'))
    {
      Swal.fire({
        title: 'Oops!',
        text: 'Login to Continue!',
        icon: 'warning',
       
      })
      this.routers.navigate([`${'/AdminLogin'}`]);
    }
    if(sessionStorage.getItem('admin'))
    {
        this.isLoggedIn = true
    }
  }

 
  submitForm(UpdateFlightForm) {
    
    UpdateFlightForm.value.flight_number=this.updateflight.flight_number;
   
    Swal.fire('Updating Flight');    Swal.showLoading();
    this.service.updateflight(this.router.snapshot.params['flightnumber'],UpdateFlightForm.value).subscribe((data)=>
     console.log(data,"Flight Added")
   )
   Swal.close();
   this.routers.navigate([`${'ViewAllFlights'}`]);
  
  }
}
