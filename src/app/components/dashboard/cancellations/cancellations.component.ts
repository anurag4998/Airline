import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {BookingHistoryService} from '../../../services/bookinghistory.service'

@Component({
  selector: 'app-cancellations',
  templateUrl: './cancellations.component.html',
  styleUrls: ['./cancellations.component.css']
})
export class CancellationsComponent implements OnInit {

  constructor(private bookinghistoryservice : BookingHistoryService,public router:Router) { }
  public cancelledtickets = []


  async ngOnInit() {
    if(!sessionStorage.getItem('user'))
    {
      Swal.fire({
        title: 'Oops!',
        text: 'Login to Continue!',
        icon: 'warning',
       
      })
      this.router.navigate([`${'/login'}`]);
    }
    await this.bookinghistoryservice.getcancelleddata()
    this.cancelledtickets = this.bookinghistoryservice.cancelledtickets
    console.log(this.cancelledtickets)
  }
}
