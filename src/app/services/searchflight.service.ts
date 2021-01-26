import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Searchflight} from '../models/searchflight';

@Injectable({
  providedIn: 'root'
})

export class SearchflightService {
  private apiServer = environment.url + "searchflight";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  public flightdata = [] ;

    async post(departure:string,arrival:string,day:string,date,seats){
    let params = new HttpParams();
    params = params.append('departure', departure);
    params = params.append('arrival', arrival);
    params = params.append('day', day);
    params = params.append('date', date);
    params = params.append('seats', seats);
  
    let a =   await this.httpClient.get<Searchflight[]>(this.apiServer,{ params: params }).toPromise()
    this.flightdata = a;
    console.log(a)
    
    
 
  }
}