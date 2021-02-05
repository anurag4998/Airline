import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminloggedinheader',
  templateUrl: './adminloggedinheader.component.html',
  styleUrls: ['./adminloggedinheader.component.css']
})
export class AdminloggedinheaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  handlelogout = () => 
  {
    sessionStorage.removeItem('admin')
    this.router.navigate([`${'/AdminLogin'}`]);
  }

}
