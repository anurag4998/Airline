import { Component, OnInit } from '@angular/core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {Signupservice} from '../../services/signup.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public signup: Signupservice) {​​​​​​​​ }​​​​​​​​
  faEyeSlash = faEyeSlash;
  faEye=faEye;
  visible = false;

  ngOnInit(): void {
  }
  onClick()
  {
    this.visible = !this.visible;
  }
  onSubmit(formvalue)
  {
    delete formvalue.cnfpwd;
    console.log(formvalue)
    this.signup.post(formvalue).subscribe()

  }

}
