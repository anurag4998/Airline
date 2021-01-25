import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import {Signup} from '../models/signup'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class Signupservice {

  private apiServer = environment.url + "user";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  
  post(data:Signup) : Observable<Signup>{
    return this.httpClient.post<Signup>(this.apiServer,data,this.httpOptions)
  
  }
 
}
