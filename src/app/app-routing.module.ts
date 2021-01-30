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
import{PassengersComponent} from './components/passengers/passengers.component'
const routes: Routes = [
  { path: '', component:SearchComponent},
  { path: 'flight/search', component: DisplayflightComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'flight/passengers', component: PassengersComponent },
  {path:'AddFlight', component: AddflightComponent},
  {path:'ViewAllFlights', component: ViewallflightsComponent},
  {path:'updateflight/:flightnumber', component:UpdateflightComponent},
  {path:'deleteflight/:flightnumber', component:DeleteflightComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
