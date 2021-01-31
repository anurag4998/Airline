import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class FetchSeat{
    private apiServer = environment.url + "seat";
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      public k=0;
      public n=20;
      
      public seats=[];
      public bookedseats=[];
        
      alpha=['A','B','C','D','E','F'];
      getseats(){
        return (this.seats);
      }
      getrows(){
        return this.n;
      }
      
        constructor(private httpClient: HttpClient) {
          for(let j =0; j<6;j++)
          {
            for(let i =1;i<=this.n;i++)
            {
              this.seats[this.k]={"seatnumber":i.toString()+this.alpha[j],"booked" : 0, "reserved" : 0};
             
              this.k++;
              
            }
          }
          
          
        }
        async fetchseats(no,date)
          {
            let params = new HttpParams();
            params = params.append('flightnumber', no);
            params = params.append('date', date);
    
            let a =   await this.httpClient.get<[]>(this.apiServer,{ params: params }).toPromise()
            this.bookedseats = a;

            this.seats.map( x => {
                if(this.bookedseats.includes(x.seatnumber))
                {
                  x.booked = 1
                }
            })
            
          }
     

}