import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Adminflight } from '../models/adminflight';

@Injectable({
  providedIn: 'root'
})
export class AdminflightcrudService {
  private apiServer = environment.url;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Adminflight[]> {
    return this.httpClient.get<Adminflight[]>(this.apiServer + '/Flight_Master/')
  }

  deleteflight(flightnumber){
    return this.httpClient.delete<Adminflight>(this.apiServer + '/Flight_Master/' + flightnumber, this.httpOptions)  
  }

  getByflightnumber(flightnumber): Observable<Adminflight> {
    return this.httpClient.get<Adminflight>(this.apiServer + '/Flight_Master/' + flightnumber)
  } 
 
  updateflight(flightnumber, flight): Observable<Adminflight> {
    return this.httpClient.put<Adminflight>(this.apiServer + '/Flight_Master/' + flightnumber, JSON.stringify(flight), this.httpOptions)
  }  
  
  addflight(flight): Observable<Adminflight> {
    return this.httpClient.post<Adminflight>(this.apiServer + '/Flight_Master/', JSON.stringify(flight), this.httpOptions)
  }
}