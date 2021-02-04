import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ForgotpasswordService } from '../../services/forgotpassword.service'

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  public otp:string
  public errormsg = null
  public successmsg
  public timer:boolean = false

  constructor(private forgotpassword:ForgotpasswordService,public router: Router) { }

  ngOnInit(): void {
  }
 
  async onSubmit(value) {
    
      if(!value.otp)
      {
        this.timer = true
        let response = await this.forgotpassword.sendotp(value)
        if(response.response == 'false')
        {
          this.errormsg = response
          Swal.fire('Failed', 'Email-Id not registered', 'error')
        }
          
        else if(response.response == 'true')
        {
          this.successmsg = response
            Swal.fire('Done', 'Otp sent on your Email-Id', 'success')
        }
      }
      else 
      {
        let response = await this.forgotpassword.verifyotp(value.email,value.otp)
        if(response.response == 'false')
        Swal.fire('Error', 'Otp not verified', 'error')
        else if(response.response == 'true')
        {
          this.successmsg = response
            Swal.fire('Done', 'Otp verified', 'success')
            this.router.navigate([`${'user/resetpassword'}`]);
        }
      }
        
      setTimeout(() => {
          this.timer = false
        },3000)
      
  }
    

  
}
