import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  faEyeSlash = faEyeSlash;
  faEye=faEye;
 
  visible = false;
 
  public error:string ;
  public timer : boolean
  ngOnInit(): void {
  }
  onClick()
  {
    this.visible = !this.visible;
  }
  onSubmit(data)
  {
    console.log(data);
  }
}
