import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adminflight } from 'src/app/models/adminflight';
import { AdminflightcrudService } from 'src/app/services/adminflightcrud.service';

@Component({
  selector: 'app-deleteflight',
  templateUrl: './deleteflight.component.html',
  styleUrls: ['./deleteflight.component.css']
})
export class DeleteflightComponent implements OnInit {
  constructor(private service:AdminflightcrudService, private router:ActivatedRoute) { }
  flight:Adminflight;

  ngOnInit(): void {
    this.service.getByflightnumber(this.router.snapshot.params['flightnumber']).subscribe((data)=>
    this.flight={
      FlightNumber:data["FlightNumber"],
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
      duration:data["duration"]
      }
    )
  }
  delete(flightnumber)
  {
    this.service.deleteflight(flightnumber).subscribe(); 
  }
}
