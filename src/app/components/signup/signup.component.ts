import { Component, OnInit } from '@angular/core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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

  onSubmit(event)
  {
    console.log(event)

  }

}
