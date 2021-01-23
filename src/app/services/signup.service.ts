import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
import {Signup} from '../models/signup'
@Injectable({
  providedIn: 'root'
})
export class Signupservice {

  private apiServer = "http://localhost:63049/api/user";
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
