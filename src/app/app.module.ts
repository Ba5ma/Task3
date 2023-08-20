import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { AlertToasterComponent } from './alert-toaster/alert-toaster.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddRestComponent } from './add-rest/add-rest.component';
import { UpdateRestComponent } from './update-rest/update-rest.component';
import { ListRestComponent } from './list-rest/list-rest.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SweetalertComponent,
    AlertToasterComponent,
    HomePageComponent,
    RegistrationComponent,
    AddRestComponent,
    UpdateRestComponent,
    ListRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
