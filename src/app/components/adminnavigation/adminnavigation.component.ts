import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminnavigation',
  templateUrl: './adminnavigation.component.html',
  styleUrls: ['./adminnavigation.component.css']
})
export class AdminnavigationComponent implements OnInit {
  constructor() { }
  public flights =[]
  public departure:string
  public arrival:String
  public classstate:boolean= false
  ngOnInit(): void {

  }
  toggle()
  {
     this.classstate =  !this.classstate
  }

}
