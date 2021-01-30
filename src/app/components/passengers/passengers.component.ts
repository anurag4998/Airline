import { Component, OnInit } from '@angular/core';
import {Passenger} from '../../models/passengers'
import {SelectedFlightService} from '../../services/selectedflight.service'

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  constructor(public flightselected:SelectedFlightService ) { }

  public count :number;
  public flightselectobj:any
  passenger = new Passenger()
  public dataarray = []
 
    ngOnInit(): void {

        this.flightselectobj = this.flightselected.flightobj
        this.dataarray.push(this.passenger)
        this.count =1;

    }

      onAdd()
      {
        
        if(this.count<this.flightselected.number_of_seats)
        {
          this.passenger = new Passenger()
          this.dataarray.push(this.passenger)
          this.count++;
          console.log(this.count)
        }
        
      }
 
    onSubmit()
      {
      console.log(this.dataarray)
      }
}
