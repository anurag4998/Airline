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
      //a variable for booking date

    constructor(private httpClient: HttpClient, private SelectedFlightService: SelectedFlightService) { 
            this.flightselectedobj = SelectedFlightService.flightobj
    }   

    post()
    {
        console.log(this.flightselectedobj)
        console.log(this.passengers)
        console.log(this.seatArray)
    }
}