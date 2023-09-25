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
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { UpdateInformationComponent } from './update-information/update-information.component';

@NgModule({
  declarations: [
    GetStartedPageComponent,
    SignupComponent,
    OtpComponent,
    DetailsComponent,
    SplashComponent,
    SelectOrderTypeComponent,
    MainPageComponent,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    UpdateInformationComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
