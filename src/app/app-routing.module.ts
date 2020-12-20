import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { HealthinsuranceComponent } from './healthinsurance/healthinsurance.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { SuccesspageComponent } from './successpage/successpage.component';
import { TravelinsuranceComponent } from './travelinsurance/travelinsurance.component';
import { VehicleinsuranceComponent } from './vehicleinsurance/vehicleinsurance.component';

const routes: Routes = [
  {path:'',component:LoginpageComponent},
  { path: 'Login', component:LoginpageComponent},
  { path: 'Dashboard', component:DashboardpageComponent,children:[  
  
  { path: 'Products/TravelInsurance', component:TravelinsuranceComponent,children:[
    { path: 'Payment', component:PaymentpageComponent}, 
    { path: 'Success', component:SuccesspageComponent}
  ] 
},
  { path: 'Products/HealthInsurance', component:HealthinsuranceComponent},
  { path: 'Products/VehicleInsurance', component:VehicleinsuranceComponent},
  
  ]},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
