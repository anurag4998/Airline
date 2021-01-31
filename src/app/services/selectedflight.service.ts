import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SelectedFlightService {
    constructor() {
    }
   
    public departure_location:string
    public arrival_location:string
    public flight_number:number
    public travel_date:Date
    public number_of_seats:number
    public travel_status:boolean

    public flightobj = {}

    async postdata(obj:any)
    {
        this.departure_location = obj.departure_location
        this.arrival_location = obj.arrival_location
        this.flight_number = obj.flight_number
        this.travel_date = obj.travel_date
        this.number_of_seats = obj.number_of_seats
        this.travel_status = obj.classstate
        this.flightobj = obj
    }

}