import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

  export class Loginservice {
    private apiServer = environment.url + "Login";
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  async login(data:any)
  {
    try 
    {
        let a = await this.httpClient.post(this.apiServer,data,this.httpOptions).toPromise()
        return "Verified"
    }
    catch(error)
    {
      if(error.status == 400)
          return "Invalid Credentials"
      if(error.status == 500)
        return "500"
    }
  }
}