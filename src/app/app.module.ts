import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from '../app/components/login/login.component';
import { AirplanecardComponent } from '../app/components/airplanecard/airplanecard.component';
import { SearchComponent } from '../app/components/search/search.component';
import { SignupComponent } from '../app/components/signup/signup.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';

import { HttpClientModule } from '@angular/common/http';

import { AddflightComponent } from './components/addflight/addflight.component'
import { DeleteflightComponent } from './components/deleteflight/deleteflight.component';
import { UpdateflightComponent } from './components/updateflight/updateflight.component';
import { ViewallflightsComponent } from './components/viewallflights/viewallflights.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import {Confirmvalidator} from '../app/shared/confirmvalidator.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisplayflightComponent } from './components/displayflight/displayflight.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminnavigationComponent } from './components/adminnavigation/adminnavigation.component';
import { SeatuiComponent } from './components/seatui/seatui.component';
import { PaymentuiComponent } from './components/paymentui/paymentui.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    AirplanecardComponent,
    Confirmvalidator,
    HeaderComponent,
    FooterComponent,
    DisplayflightComponent,
    AddflightComponent,
    DeleteflightComponent,
    UpdateflightComponent,
    ViewallflightsComponent,
    PassengersComponent,
    AdminloginComponent,
    AdminnavigationComponent,
    SeatuiComponent,
    PaymentuiComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,  
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatChipsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
