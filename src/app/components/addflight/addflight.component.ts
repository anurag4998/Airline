import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminflight } from 'src/app/models/adminflight';
import { AdminflightcrudService } from 'src/app/services/adminflightcrud.service';
import { AirportsService } from 'src/app/services/airports.service';
import { AdminloginComponent } from '../adminlogin/adminlogin.component';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {
  public citydata;
  addflight:Adminflight;
  flights;
  flightcheck=true;
  v:Adminflight;
  constructor(private service:AdminflightcrudService, private airportservice : AirportsService, private router: Router) { }

  ngOnInit(): void {
    this.addflight={
      flight_number:null,
      departure_location:'',
      arrival_location:'',
      Monday:false,
      Tuesday:false,
      Wednesday:false,
      Thursday:false,
      Friday:false,
      Saturday:false,
      Sunday:false,
      departure_time:null,
      arrival_time:null,
      duration:null
    }
    this.citydata = this.airportservice.airports;
    this.flightcheck=true;
    this.service.getAll().subscribe((data: Adminflight[])=>{
      this.flights = data;
     
  }) 
  }
  onclickfn()
  {
    this.flightcheck=true;
  }
  
  
 
  submitForm(AddFlightForm) {
   
  for(let i=0;i<this.flights.length;i++)
  {
    if(this.flights[i].flight_number==AddFlightForm.value.flight_number)
      {
        this.flightcheck=false;
      }
  }

  console.log(this.flightcheck);
    
    if(this.flightcheck==true)
    {
      console.log(AddFlightForm.value);
      this.service.addflight(AddFlightForm.value).subscribe((data)=>
      console.log(data,"Flight Added")
      )
    this.router.navigate([`${'ViewAllFlights'}`]);
    }
   
   }
   
}
