import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurentDashComponent } from './restaurent-dash/restaurent-dash.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login',pathMatch: 'full'   //login.compnent.html kde control jail
  },
  {
   path: 'login', component: LoginComponent   //login.component.html
  },
 {
   path: 'signup', component: SignupComponent   //signup.compnent.html
 }, 
 {
   path:'restaurent' , component: RestaurentDashComponent  //rest-dash.component.html
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
