import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageLoginComponent } from './layout/landing-page-login/landing-page-login.component';

export const routes: Routes = [
  { path: 'landingPageLoginComponent', component: LandingPageLoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
