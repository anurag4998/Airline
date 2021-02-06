import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {  Observable, throwError } from 'rxjs';
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
      console.log(error)
         if(error.status == 0)
          return ('Check Your Connection')
        else if(error.status == 409)
          return "Email-Id already registered"
        else if(error.status == 400)
          return "Invalid Credentials"
        else if(error.status == 500)
          return "500"
    }
  
  }
 
}
