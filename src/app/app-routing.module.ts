import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from '../app/components/search/search.component'
import {DisplayflightComponent} from '../app/components/displayflight/displayflight.component'
import {SignupComponent} from '../app/components/signup/signup.component'
import {LoginComponent} from '../app/components/login/login.component'
import { AddflightComponent } from './components/addflight/addflight.component';
import { DeleteflightComponent } from './components/deleteflight/deleteflight.component';
import { UpdateflightComponent } from './components/updateflight/updateflight.component';
import { ViewallflightsComponent } from './components/viewallflights/viewallflights.component';
import {PassengersComponent} from './components/passengers/passengers.component'
import{SeatuiComponent} from './components/seatui/seatui.component'
import {PaymentuiComponent} from './components/paymentui/paymentui.component'
import { AdminnavigationComponent } from './components/adminnavigation/adminnavigation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { FlightdataComponent } from './components/dashboard/flightdata/flightdata.component';


const routes: Routes = [
  { path: '', component:SearchComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'flight/search', component: DisplayflightComponent },
  { path: 'flight/passengers', component: PassengersComponent },
  { path: 'flight/seats', component: SeatuiComponent },
  { path: 'flight/payment', component:PaymentuiComponent },
  {path : 'flight/user/dashboard', component:FlightdataComponent },
  
  
  { path: 'AdminLogin', component: AdminloginComponent},
  {path:'AddFlight', component: AddflightComponent},
  {path:'ViewAllFlights', component: ViewallflightsComponent},
  {path:'updateflight/:flightnumber', component:UpdateflightComponent},
  {path:'deleteflight/:flightnumber', component:DeleteflightComponent},
  {path:'AdminNavigation', component: AdminnavigationComponent},
  {path:'forgotpassword/resetpassword', component:ResetpasswordComponent },
 

  { path:'**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
