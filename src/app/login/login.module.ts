import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { GetStartedPageComponent } from './get-started-page/get-started-page.component';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { SplashComponent } from './splash/splash.component';
import { SelectOrderTypeComponent } from './select-order-type/select-order-type.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    GetStartedPageComponent,
    SignupComponent,
    OtpComponent,
    DetailsComponent,
    SplashComponent,
    SelectOrderTypeComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
