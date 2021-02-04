import { HttpClient, HttpHeaders ,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
  private apiServer = environment.url+"forgotpassword";
  private emailid
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 
}
 constructor(private httpClient: HttpClient) { }

  async sendotp(email){
    this.emailid = email
    try 
    {
     
       let a =  await this.httpClient.post(this.apiServer, email, this.httpOptions).toPromise()
       return {response:'true'}
    }
    catch(error)
    {
      if(error.status==400)
        return {response:'false', message: 'Email-ID not found'}
    }
  }

  async verifyotp(email,otp)
  {
    let apiServer =  environment.url+"ValidateOTP";   
    let body = {'email':email, 'otp':otp}
    try
      {
        let a =  await this.httpClient.post(apiServer, body,this.httpOptions).toPromise()
        return {response:'true'}
      }
      catch(error)
      {
        if(error.status==400)
          return {response:'false'}
      }
  }

  async changepassword(password)
  {
    console.log(password)
        console.log(this.emailid)

    let body = {'email':this.emailid.email, 'password':password}
    let apiServer =  environment.url+"resetpassword";  
    try
    {
      let a =  await this.httpClient.post(apiServer, body,this.httpOptions).toPromise()
      return {response:'true'}
    }
    catch(error)
    {
      if(error.status==400)
        return {response:'false'}
    }
  }
}

