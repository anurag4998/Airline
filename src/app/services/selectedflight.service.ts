import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


    
   export class SelectedFlightService 
    {

      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      constructor(private httpClient: HttpClient) {
      }

      private apiServer = environment.url + "getprice";

    
      public departure_location:string
      public arrival_location:string
      public flight_number:number
      public travel_date:Date
      public number_of_seats:number
      public travel_status:boolean

      public flightobj = {}

      async postdata(obj:any)
      {
          this.departure_location = obj.departure_location
          this.arrival_location = obj.arrival_location
          this.flight_number = obj.flight_number
          this.travel_date = obj.travel_date
          this.number_of_seats = obj.number_of_seats
          this.travel_status = obj.classstate
          this.flightobj = obj
      }

      async getFlightPrice(flightnumber,seatclass)
      {
        let params = new HttpParams();
        params = params.append('flightnumber', flightnumber);
        params = seatclass == true ? params.append('seatclass', 'business') : params.append('seatclass', 'economy');
        try 
        {
          return await this.httpClient.get<number>(this.apiServer,{ params: params }).toPromise()
        }
        catch(error)
        {
           return "false"
        }
        
      }

}