import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {Loginservice} from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:Loginservice, public router: Router) { }
  faEyeSlash = faEyeSlash;
  faEye=faEye;
  visible = false;
  public response: string
  public timer : boolean

  ngOnInit(): void {
  }
  onClick()
  {
    this.visible = !this.visible;
  }
  async onSubmit(data) {
    this.timer = true
    let response = await this.loginservice.login(data)
    console.log(response)
    if(response == "Verified")
      {
        this.router.navigate([`${'flight/search'}`]);
        sessionStorage.setItem('user',data.email)

      }
    else 
      {
        this.response = response
      }
    setTimeout(() => {
      this.timer = false
    },3000)
    }

}
