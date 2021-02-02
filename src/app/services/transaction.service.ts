import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams } from "@angular/common/http";
import {SelectedFlightService} from '../services/selectedflight.service'
@Injectable({
  providedIn: 'root'
})

export class TransactionService {
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }

      public flightselectedobj:any
      public passengers:any
      public seatArray = []
      public current_date : string
      public final_amount:number
      //a variable for booking date

    constructor(private httpClient: HttpClient, private SelectedFlightService: SelectedFlightService) { 
            this.flightselectedobj = SelectedFlightService.flightobj
            this.current_date = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
    }   

    post()
    {
        console.log(this.flightselectedobj)
        console.log(this.passengers)
        console.log(this.seatArray)
        console.log(this.final_amount)
    }
}