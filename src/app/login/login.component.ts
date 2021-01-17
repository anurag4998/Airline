import { Component, OnInit } from '@angular/core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  faEyeSlash = faEyeSlash;
  faEye=faEye;
  visible = false;
  ngOnInit(): void {
  }
  onClick()
  {
    this.visible = !this.visible;
  }
}
