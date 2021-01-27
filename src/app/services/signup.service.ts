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
  
  async post(data:Signup) {
    try 
    {
      let a = await this.httpClient.post<Signup>(this.apiServer,data,this.httpOptions).toPromise()
    }
    catch(error)
    { 

         return (error.error.Message)
    }
  
  }
 
}
