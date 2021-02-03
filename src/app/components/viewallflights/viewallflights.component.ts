import { Component, OnInit } from '@angular/core';
import { Adminflight } from 'src/app/models/adminflight';
import { AdminflightcrudService } from 'src/app/services/adminflightcrud.service';

@Component({
  selector: 'app-viewallflights',
  templateUrl: './viewallflights.component.html',
  styleUrls: ['./viewallflights.component.css']
})
export class ViewallflightsComponent implements OnInit {
  
  flights:Adminflight[];
  searchText;
  constructor(private service:AdminflightcrudService,) {
    
   }

  ngOnInit() {
    
    this.service.getAll().subscribe((data: Adminflight[])=>{
        this.flights = data;
        this.flights=this.flights.sort();
    })  
  
  }
}
