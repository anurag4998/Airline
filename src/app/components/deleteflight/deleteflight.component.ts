import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adminflight } from 'src/app/models/adminflight';
import { AdminflightcrudService } from 'src/app/services/adminflightcrud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deleteflight',
  templateUrl: './deleteflight.component.html',
  styleUrls: ['./deleteflight.component.css']
})
export class DeleteflightComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private service:AdminflightcrudService, private router:ActivatedRoute, private routers: Router) { }
  flight:Adminflight;

  ngOnInit(): void {
    this.service.getByflightnumber(this.router.snapshot.params['flightnumber']).subscribe((data)=>
    this.flight={
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

  async delete(flightnumber)
  {
    Swal.fire('Deleting Flight');    Swal.showLoading();
    await this.service.deleteflight(flightnumber).subscribe();
    Swal.close(); 
    this.routers.navigate([`${'ViewAllFlights'}`]);
  }
}
