import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {TransactionService} from '../../services/transaction.service'
@Component({
  selector: 'app-paymentui',
  templateUrl: './paymentui.component.html',
  styleUrls: ['./paymentui.component.css']
})
export class PaymentuiComponent implements OnInit {

  constructor(private router:Router, private TransactionService:TransactionService) { }
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
      expmonth:null,
      expyear:null,
      cvv:null
    }
  }

  async submitForm(paymentForm)
  {
      delete paymentForm.cvv
      delete paymentForm.name
      this.TransactionService.card_details = paymentForm
      let result = await this.TransactionService.post()
      if(result)
      {
        Swal.fire(
          'Woohoo',
          'Your Tickets are booked :)',
          'success'
        )
        this.router.navigate([`${'/flight/user/dashboard'}`]);

      }
      else 
      {
        
          Swal.fire(
            'Transaction Failed',
            'Try again later :(',
            'error'
          )
      }
  }
}
