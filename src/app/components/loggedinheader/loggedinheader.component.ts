import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggedinheader',
  templateUrl: './loggedinheader.component.html',
  styleUrls: ['./loggedinheader.component.css']
})
export class LoggedinheaderComponent implements OnInit {

  constructor(private router: Router) { }
  faUser = faUser
  ngOnInit(): void {
  }
  handlelogout = () => 
  {
    sessionStorage.removeItem('user')
    this.router.navigate([`${'/login'}`]);
  }
}
