import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { HeaderpageComponent } from './headerpage/headerpage.component';
import { FooterpageComponent } from './footerpage/footerpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { TravelinsuranceComponent } from './travelinsurance/travelinsurance.component';
import { HealthinsuranceComponent } from './healthinsurance/healthinsurance.component';
import { VehicleinsuranceComponent } from './vehicleinsurance/vehicleinsurance.component';
import { SuccesspageComponent } from './successpage/successpage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';

// const Managepageroot = [  
//   //  { path: '', redirectTo:'/', pathMatch:'full'},
//   { path: 'Login', component:LoginpageComponent},
//   { path: 'Dashboard',component:DashboardpageComponent},
  
//   // { path: '**', redirectTo: '/' }

// ];

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DashboardpageComponent,
    HeaderpageComponent,
    FooterpageComponent,
    RegisterpageComponent,
    TravelinsuranceComponent,
    HealthinsuranceComponent,
    VehicleinsuranceComponent,
    SuccesspageComponent,
    PaymentpageComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,FormsModule,
   // RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
