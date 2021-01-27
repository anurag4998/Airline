import { Component, OnInit } from '@angular/core';
import { Adminflight } from 'src/app/models/adminflight';
import { AdminflightcrudService } from 'src/app/services/adminflightcrud.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  addflight:Adminflight;
  constructor(private service:AdminflightcrudService) { }

  ngOnInit(): void {
    this.addflight={
      FlightNumber:null,
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
  }
  
  
 
  submitForm(AddFlightForm) {
    console.log(AddFlightForm.value);
    this.service.addflight(AddFlightForm.value).subscribe((data)=>
     console.log(data,"Flight Added")
    )
  }
}
