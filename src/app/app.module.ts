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
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


import {Confirmvalidator} from '../app/shared/confirmvalidator.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisplayflightComponent } from './components/displayflight/displayflight.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaymentuiComponent } from './components/paymentui/paymentui.component';
import { SeatuiComponent } from './components/seatui/seatui.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { FlightdataComponent } from './components/dashboard/flightdata/flightdata.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { LoggedinheaderComponent } from './components/loggedinheader/loggedinheader.component';
import { CancellationsComponent } from './components/dashboard/cancellations/cancellations.component';
import { RulesComponent } from './components/rules/rules.component'
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { AdminfooterComponent } from './components/adminfooter/adminfooter.component';
import { AdminloggedinheaderComponent } from './components/adminloggedinheader/adminloggedinheader.component';
import { EticketComponent } from './components/eticket/eticket.component';

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

    PageNotFoundComponent,
  
    SeatuiComponent,
    PaymentuiComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    FlightdataComponent,
    SidebarComponent,
    LoggedinheaderComponent,
    CancellationsComponent,
    RulesComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminloggedinheaderComponent,
    EticketComponent,
   
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
