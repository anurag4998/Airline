import { NgModule } from '@angular/core';
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

import { AdminnavigationComponent } from './components/adminnavigation/adminnavigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

const routes: Routes = [
  { path: '', component:SearchComponent},
  { path: 'flight/search', component: DisplayflightComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  
  
  {path:'AddFlight', component: AddflightComponent},
  {path:'ViewAllFlights', component: ViewallflightsComponent},
  {path:'updateflight/:flightnumber', component:UpdateflightComponent},
  {path:'deleteflight/:flightnumber', component:DeleteflightComponent},
  {path:'AdminNavigation', component: AdminnavigationComponent},
  { path: 'flight/passengers', component: PassengersComponent },
  { path: 'flight/seats', component: SeatuiComponent },
  { path: 'AdminLogin', component: AdminloginComponent},


  { path:'**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
