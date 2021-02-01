import { Component, OnInit } from '@angular/core';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  verify=true;
  yes;
  public adminlogin;
  constructor() { }
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
  submitForm(AdminLoginForm)
  {
    console.log(AdminLoginForm.value);

    if(this.adminlogin.email == "aditya@gmail.com" && this.adminlogin.password == "regex123" )
      {
        
        window.location.href = "http://localhost:4200/ViewAllFlights";
        console.log("yes");
      }
     else 
      {
        console.log("no");
        this.verify=false;
      }

  }
}
