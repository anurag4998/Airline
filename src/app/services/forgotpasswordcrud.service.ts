import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordcrudService {
  private apiServer = environment.url+"forgotpassword";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 
}
 constructor(private httpClient: HttpClient) { }
  forgotPassword(email){
    return this.httpClient.post<string>(this.apiServer, JSON.stringify(email), this.httpOptions)
  }

}