import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-paymentui',
  templateUrl: './paymentui.component.html',
  styleUrls: ['./paymentui.component.css']
})
export class PaymentuiComponent implements OnInit {
payment;
  constructor() { }

  ngOnInit(): void {
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
