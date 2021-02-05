import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminflight } from 'src/app/models/adminflight';
import { AdminflightcrudService } from 'src/app/services/adminflightcrud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewallflights',
  templateUrl: './viewallflights.component.html',
  styleUrls: ['./viewallflights.component.css']
})
export class ViewallflightsComponent implements OnInit {
  
  flights:Adminflight[];
  searchText;
  isLoggedIn: boolean;
  constructor(private service:AdminflightcrudService,private routers:Router) {
    
   }

  ngOnInit() {
    
    this.service.getAll().subscribe((data: Adminflight[])=>{
        this.flights = data;
        this.flights=this.flights.sort();
    })  
    if(!sessionStorage.getItem('admin'))
    {
      Swal.fire({
        title: 'Oops!',
        text: 'Login to Continue!',
        icon: 'warning',
       
      })
      this.routers.navigate([`${'/AdminLogin'}`]);
    }
    if(sessionStorage.getItem('admin'))
    {
        this.isLoggedIn = true
    }
  
  }
 
}
