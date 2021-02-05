import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams } from "@angular/common/http";
import {SelectedFlightService} from '../services/selectedflight.service'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      private apiServer = environment.url + "Transaction";
      public passengers:any
      public seatArray = []
      public current_date : string
      public final_amount:number
      public card_details
      public useremail:string
      public seat_type:string
      public body:any
      public contact_email:string
      public contact_no:string

      public booked_information

    constructor(private httpClient: HttpClient, private SelectedFlightService: SelectedFlightService) { 
            this.current_date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
            this.useremail = sessionStorage.getItem('user')
            this.seat_type = this.SelectedFlightService.travel_status ? "business":"economy"
    }   

    async post()
    {

        this.body = {
            "email": this.useremail,
            "flight_number": this.SelectedFlightService.flight_number,
            "travel_date":this.SelectedFlightService.travel_date,
            "number_of_seats":this.SelectedFlightService.number_of_seats,
            "seat_type":this.seat_type,
            "booking_date" : this.current_date,
            "amount":this.final_amount,
            "seatarray":this.seatArray,
            "passengers":this.passengers,
            "contact_email":this.contact_email,
            "contact_no":this.contact_no,
            "carddetails":this.card_details            
        }
        try 
        {
          let a = await this.httpClient.post(this.apiServer,this.body,this.httpOptions).toPromise()
          this.booked_information = a
          return true;
        } 
        catch(error)
        {
          return false;
        }
        
      
    }
}