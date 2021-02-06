import { Time } from "@angular/common";

export class Adminflight {
    flight_number:number;
    departure_location:string;
    arrival_location:string;
    Monday:Boolean;
    Tuesday:Boolean;
    Wednesday:Boolean;
    Thursday:Boolean;
    Friday:Boolean;
    Saturday:Boolean;
    Sunday:Boolean;
    departure_time:Time;
    arrival_time:Time;
    duration:Time;
    business_cost: number;
    economy_cost:number;
}
