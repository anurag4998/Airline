import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  private apiServer = environment.url + "AdminLogin";
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
  }
}
}
