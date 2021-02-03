import { Component, OnInit } from '@angular/core';
import { ForgotpasswordcrudService } from 'src/app/services/forgotpasswordcrud.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  public successMessage: string;
  public errorMessage: string;
  public showSuccess: boolean;
  public showError: boolean;

  constructor(private forgotpassword:ForgotpasswordcrudService) { }

  ngOnInit(): void {
  }
 
  onSubmit(value) {
  
      console.log(value);

      this.forgotpassword.forgotPassword(value).subscribe((data) => 
      console.log(data)
    )
    

  }
}
