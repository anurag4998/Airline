import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { AdminloginService } from 'src/app/services/adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  verify=true;
  yes;
  public adminlogin;
  public response: string
  public timer : boolean
  constructor(private loginservice:AdminloginService, private router: Router) { }
  faEyeSlash = faEyeSlash;
  faEye=faEye;
  visible = false;
  ngOnInit(): void {
    this.adminlogin={
      email:'',
      password:''
    };
  }
  onClick()
  {
    this.visible = !this.visible;
  }
  async submitForm(AdminLoginForm)
  {
    console.log(AdminLoginForm.value);
    this.timer = true
    let response = await this.loginservice.login(AdminLoginForm.value)
    console.log(response)
    if(response == "Verified")
      {
        this.router.navigate([`${'ViewAllFlights'}`]);
        sessionStorage.setItem('admin',AdminLoginForm.value.email)

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
