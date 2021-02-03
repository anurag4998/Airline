import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loggedinheader',
  templateUrl: './loggedinheader.component.html',
  styleUrls: ['./loggedinheader.component.css']
})
export class LoggedinheaderComponent implements OnInit {

  constructor() { }
  faUser = faUser
  ngOnInit(): void {
  }

}
