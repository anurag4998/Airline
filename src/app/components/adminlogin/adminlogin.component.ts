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
  public adminlogin={"email":"","password":""};
  constructor() { }
  faEyeSlash = faEyeSlash;
  faEye=faEye;
  visible = false;
  ngOnInit(): void {
    this.adminlogin={"email":"","password":""};
  }
  onClick()
  {
    this.visible = !this.visible;
  }
  submitForm(AdminLoginForm)
  {
    if(AdminLoginForm.email == "aditya@gmail.com" && AdminLoginForm.password == "regex123" )
      {
        
        
      }
     else 
      {
        this.verify=false;
      }

  }
}
