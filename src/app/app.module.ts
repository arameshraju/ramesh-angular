import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/**ngx modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { Router } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
/*app Modules*/
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
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

@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule, FormsModule,CollapseModule.forRoot(),AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, HomeComponent, UserProfileComponent, PatientProfileComponent, OrderComponent, PatientUpdatesComponent, OrderReportComponent, NotificationComponent, WipComponent, ContactComponent, ProductsComponent, FaqComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
   constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
 }
