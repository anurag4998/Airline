import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {FetchSeatService} from '../../services/fetchseat.service'
import {TransactionService} from '../../services/transaction.service'
@Component({
  selector: 'app-seatui',
  templateUrl: './seatui.component.html',
  styleUrls: ['./seatui.component.css']
})
export class SeatuiComponent implements OnInit {

  constructor(private seatService : FetchSeatService, public TransactionService:TransactionService, public router: Router) {   }

  public row1=[];
  public row2=[];
  public row3=[];
  public row4=[];
  public row5=[];
  public row6=[];
  
  public seatarray
  public n =20
  public k=0;
  public numberofseats:number
  public seatclass:string
  public mobile:string
  public email:string
  public reservedSeatsArray = []


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

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    const date =`${currentYear}-${currentMonth+1}-${currentDate}`
    this.seatService.fetchseats(111,date)
    this.numberofseats = this.seatService.number_of_seats
    this.seatclass = this.seatService.seatclass
    this.setbooked()

  }

  setbooked = () => 
  {
    this.seatarray = this.seatService.getseats();

    for(let j=0;j<this.n;j++)
    {
      this.row1[j]=this.seatarray[j];
    }
    for(let j=this.n;j<this.n*2;j++)
    {
      this.row2[this.k]=this.seatarray[j];
      this.k++;
    }
    this.k=0;
    for(let j=this.n*2;j<this.n*3;j++)
    {
      this.row3[this.k]=this.seatarray[j];
      this.k++;
    }
    this.k=0;
    for(let j=this.n*3;j<this.n*4;j++)
    {
      this.row4[this.k]=this.seatarray[j];
      this.k++;
    }
    this.k=0;
    for(let j=this.n*4;j<this.n*5;j++)
    {
      this.row5[this.k]=this.seatarray[j];
      this.k++;
    }
    this.k=0;
    for(let j=this.n*5;j<this.n*6;j++)
    {
      this.row6[this.k]=this.seatarray[j];
      this.k++;
    }
   
  }

  
  reserve = (seatnumber:any) =>
  {


      if(this.reservedSeatsArray.includes(seatnumber))
      {
          this.reservedSeatsArray = this.reservedSeatsArray.filter(x => x!= seatnumber)
          this.seatarray.map(x => {
            if(x.seatnumber == seatnumber)
              x.reserved = 0
          })
          return
      }
      if(this.reservedSeatsArray.length < this.numberofseats)
      {
        this.reservedSeatsArray.push(seatnumber)
        this.seatarray.map(x => {
          if(x.seatnumber == seatnumber)
            x.reserved = 1
        })
      }
       
      else 
      {
        let deselected = this.reservedSeatsArray.shift()
        this.seatarray.map(x => {
          if(x.seatnumber == deselected)
            x.reserved = 0
        })
        this.reservedSeatsArray.push(seatnumber)
        this.seatarray.map(x => {
          if(x.seatnumber == seatnumber)
            x.reserved = 1
        })
      }

  } 

  onSubmit()
  {
 
    if(!this.email || !this.mobile)
    {
        Swal.fire('oops', 'Enter contact details', 'error')    
        return
    }
    var emailregex =  new RegExp ("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    var phoneregex = new RegExp("^[0-9]{10}$")
    if(!emailregex.test(this.email) || !phoneregex.test(this.mobile))
    {
      Swal.fire('oops', 'Check your contact details', 'error')    

    }
    
    else
    {
      if(this.reservedSeatsArray.length == this.numberofseats)
        {
          this.TransactionService.seatArray = this.reservedSeatsArray
          this.TransactionService.contact_no = this.mobile
          this.TransactionService.contact_email = this.email
          this.router.navigate([`${'flight/payment'}`]);
        }
        else 
        Swal.fire('oops', 'Select all seats', 'error')
        }
  }
}
