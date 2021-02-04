import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ForgotpasswordService } from '../../services/forgotpassword.service'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  faEyeSlash = faEyeSlash;
  faEye=faEye;
  constructor(private forgotpassword:ForgotpasswordService,public router: Router) { }

  visible = false;
 

  ngOnInit(): void {
  }
  onClick()
  {
    this.visible = !this.visible;
  }
  async onSubmit(data)
  {
    console.log(data)
    delete data.cnfpwd
    let response = await this.forgotpassword.changepassword(data.password)
        if(response.response == 'false')
            Swal.fire('Error', 'Try again', 'error')
        else if(response.response == 'true')
        {
            Swal.fire('Done', 'Password changed successfully', 'success')
            this.router.navigate([`${'/login'}`]);
         }
  }
}
