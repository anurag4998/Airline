import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import {Signupservice} from '../../services/signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public signup: Signupservice, private router: Router) {​​​​​​​​ }​​​​​​​​
  faEyeSlash = faEyeSlash;
  faEye=faEye;
  //password toggle
  visible = false;
  //Error Messages
  public error:string ;
  public timer : boolean
  ngOnInit(): void {
  }
  onClick()
  {
    this.visible = !this.visible;
  }
  async onSubmit(formvalue)
  {
    delete formvalue.cnfpwd;
    this.timer = true
    this.error = await this.signup.post(formvalue)
    setTimeout(() => {
      this.timer = false
    },3000)
    if(this.error == null)
    {
      Swal.fire('Done', 'Account Created!', 'success')
      this.router.navigate([`${'login'}`]);
      
    }

  }

}
