import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedPageComponent } from './get-started-page/get-started-page.component';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { DetailsComponent } from './details/details.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  {path:'', component:SplashComponent},
  {path:'getstarted', component:GetStartedPageComponent},
  {path:'signup', component:SignupComponent},
  {path:'otp', component:OtpComponent},
  {path:'details', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
