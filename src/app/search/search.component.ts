import { Component, OnInit } from '@angular/core';
import {AirportsService} from '../airports.service';
import {Searchflight} from '../searchflight'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service : AirportsService) {
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
  
  model = new Searchflight("one-way","Delhi", '', new Date(), new Date() , 1);
 
  onSubmit()
  {
    console.log(3)

  }

}
