import { Component, OnInit } from '@angular/core';
import {FetchSeatService} from '../../services/fetchseat.service'
@Component({
  selector: 'app-seatui',
  templateUrl: './seatui.component.html',
  styleUrls: ['./seatui.component.css']
})
export class SeatuiComponent implements OnInit {

  constructor(private seatService : FetchSeatService) {   }

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

  public reservedSeatsArray = []


  ngOnInit(): void {
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
    console.log(this.seatclass)
    console.log(this.seatService.seatclass)
    console.log(this.seatarray)
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
  
}
