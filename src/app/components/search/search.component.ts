import { Component, OnInit } from '@angular/core';
import {AirportsService} from '../../services/airports.service';
import {SearchflightService} from '../../services/searchflight.service'
import {Searchflight} from '../../models/searchflight'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service : AirportsService, private GetFlightsService:SearchflightService,private router: Router) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    this.minDate = new Date(currentYear,currentMonth,currentDate)
    this.maxDate = new Date(currentYear,currentMonth+2,currentDate)
  }

  ngOnInit(): void {

    this.data = this.service.airports

  }
  public data: any = []
  public travellers:number[] = [1,2,3,4,5,6,7,8,9]
  public departurecity:string 
  public arrivalcity:string
  minDate: Date;
  maxDate: Date;
  pageName = 'flight/search'

  
  model = new Searchflight("one-way","Delhi", '', new Date(), new Date() , 1);
  
  
   
  async onSubmit()
  {
    Swal.fire('Fetching Your Flights');    Swal.showLoading();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let depart_location = this.model.departurelocation
    let arrival_location = this.model.arrivallocation
    let departure_date = `${this.model.departuredate.getFullYear()}-${this.model.departuredate.getUTCMonth()+1}-${this.model.departuredate.getDate()}`
    let day = days[this.model.departuredate.getDay()]
    let direction = this.model.direction
    let seats = this.model.seats

    if(direction == 'one-way')
     await this.GetFlightsService.post(
        depart_location,arrival_location,day,departure_date,seats
      )
      Swal.close();
      this.router.navigate([`${this.pageName}`]);



  }

}
