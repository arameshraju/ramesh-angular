import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './login/home/home.component';
import { UserProfileComponent } from './actions/user-profile/user-profile.component';
import { PatientProfileComponent } from './actions/patient-profile/patient-profile.component';
import { OrderComponent } from './actions/order/order.component';
import { PatientUpdatesComponent } from './actions/patient-updates/patient-updates.component';
import { OrderReportComponent } from './reports/order-report/order-report.component';
import { NotificationComponent } from './reports/notification/notification.component';
import { WipComponent } from './reports/wip/wip.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { FaqComponent } from './faq/faq.component';

const appRoutes: Routes = [
  {   path: 'home',  component: HomeComponent  },
  {   path: 'login', component: LoginComponent},
  {   path: 'uprofile', component: UserProfileComponent},
  {   path: 'pprofile', component: PatientProfileComponent},
  {   path: 'pupdate', component: PatientUpdatesComponent},
  {   path: 'order', component: OrderComponent},
  {   path: 'order-report', component: OrderReportComponent},
  {   path: 'notify', component: NotificationComponent},
  {   path: 'wip', component: WipComponent},
  {   path: 'contact', component: ContactComponent},
  {   path: 'products', component: ProductsComponent},
  {   path: 'faq', component: FaqComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
