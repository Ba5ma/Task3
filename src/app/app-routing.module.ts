import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { AlertToasterComponent } from './alert-toaster/alert-toaster.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddRestComponent } from './add-rest/add-rest.component';
import { UpdateRestComponent } from './update-rest/update-rest.component';
import { ListRestComponent } from './list-rest/list-rest.component';

const routes: Routes = [
  
  {path:'home', component:HomePageComponent},
  {path:'register',component:RegistrationComponent},
  {path:'login', component:SweetalertComponent},
  {path:'alerttoaster', component: AlertToasterComponent},
  {path:'add', component:AddRestComponent},
  {path:'update/:id', component:UpdateRestComponent},
  {path:'list', component:ListRestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
