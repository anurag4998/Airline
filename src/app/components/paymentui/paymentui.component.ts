import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-paymentui',
  templateUrl: './paymentui.component.html',
  styleUrls: ['./paymentui.component.css']
})
export class PaymentuiComponent implements OnInit {

  constructor(private router:Router) { }
  public payment

  ngOnInit(): void {
    if(!sessionStorage.getItem('user'))
    {
      Swal.fire({
        title: 'Oops!',
        text: 'Login to Continue!',
        icon: 'warning',
       
      })
      this.router.navigate([`${'/login'}`]);
    }
    this.payment={
      name:'',
      cardnumber:null,
      exp:null,
      cvc:null
    }
  }

  submitForm(paymentForm)
  {

  }
}
