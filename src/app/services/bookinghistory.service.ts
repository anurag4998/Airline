import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

  export class BookingHistoryService {
    private apiServer = environment.url+"BookHistory";
    private useremail
    public bookedtickets
    public cancelledtickets
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
   
  }
   constructor(private httpClient: HttpClient) {
    this.useremail = sessionStorage.getItem('user')

    }
    async getbookeddata(){
        let params = new HttpParams();
        params = params.append('mail', this.useremail);

        let bookeddata =  await this.httpClient.get<[]>(this.apiServer,{ params: params }).toPromise()
        this.bookedtickets = bookeddata
        console.log(this.bookedtickets)
      
    }

    async cancelticket(id,current_date)
    {
        let params = new HttpParams();
        params = params.append('transid', id);
        params = params.append('cancel_date', current_date);
        let apiServer = environment.url+"Cancellation";
        try 
        {
            let a =   await this.httpClient.post(apiServer,this.httpOptions,{ params: params }).toPromise()
            console.log(a)

        }   
        catch(error)
        {
            return false;
        }

    }
    async getcancelleddata(){
      let params = new HttpParams();
      let apiServer =  environment.url + 'CancelHistory'
      params = params.append('mail', this.useremail);

      let cancelleddata =  await this.httpClient.get<[]>(apiServer,{ params: params }).toPromise()
      this.cancelledtickets = cancelleddata
      console.log(this.cancelledtickets)
    
  }
  
  }