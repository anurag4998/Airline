import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airplanecard',
  templateUrl: './airplanecard.component.html',
  styleUrls: ['./airplanecard.component.css']
})
export class AirplanecardComponent implements OnInit {

  constructor() { }
  public color = 'green'
  ngOnInit(): void {
  }

}
