import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedPageComponent } from './get-started-page/get-started-page.component';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { DetailsComponent } from './details/details.component';
import { SplashComponent } from './splash/splash.component';
import { SelectOrderTypeComponent } from './select-order-type/select-order-type.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

const routes: Routes = [
  { path: '', component: SplashComponent},
  { path: 'getstarted', component: GetStartedPageComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'otp', component: OtpComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'order', component: SelectOrderTypeComponent},
  { path: 'mainpage', component: MainPageComponent},
  { path: 'page2', component: Page2Component},
  { path: 'page3', component: Page3Component},
  { path: 'page4', component: Page4Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
