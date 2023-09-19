import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isXSmall = false;
  isSmall = false;
  isMedium = false;
  isLarge = false;
  isXLarge = false;
  isHandset = false;
  isTablet = false;
  isWeb = false;
  isHandsetPortrait = false;
  isTabletPortrait = false;
  isWebPortrait = false;
  isHandsetLandscape = false;
  isTabletLandscape = false;
  isWebLandscape = false;

  otp1: string = '';
  otp2: string = '';
  otp3: string = '';
  otp4: string = '';

  onInputChange(inputNumber: number) {
    if (inputNumber === 1 && this.otp1) {
      document.getElementById('otpInput2')?.focus();
    } else if (inputNumber === 2 && this.otp2) {
      document.getElementById('otpInput3')?.focus();
    } else if (inputNumber === 3 && this.otp3) {
      document.getElementById('otpInput4')?.focus();
    }
  }

  constructor(private breakpointObserver: BreakpointObserver,private router: Router) { }
  
  navigateOtp() {
    this.router.navigate(['/otp']);
  }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web,
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait,
      Breakpoints.WebPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletLandscape,
      Breakpoints.WebLandscape,
    ]).subscribe(result => {
      this.isXSmall = result.breakpoints[Breakpoints.XSmall];
      this.isSmall = result.breakpoints[Breakpoints.Small];
      this.isMedium = result.breakpoints[Breakpoints.Medium];
      this.isLarge = result.breakpoints[Breakpoints.Large];
      this.isXLarge = result.breakpoints[Breakpoints.XLarge];
      this.isHandset = result.breakpoints[Breakpoints.Handset];
      this.isTablet = result.breakpoints[Breakpoints.Tablet];
      this.isWeb = result.breakpoints[Breakpoints.Web];
      this.isHandsetPortrait = result.breakpoints[Breakpoints.HandsetPortrait];
      this.isTabletPortrait = result.breakpoints[Breakpoints.TabletPortrait];
      this.isWebPortrait = result.breakpoints[Breakpoints.WebPortrait];
      this.isHandsetLandscape = result.breakpoints[Breakpoints.HandsetLandscape];
      this.isTabletLandscape = result.breakpoints[Breakpoints.TabletLandscape];
      this.isWebLandscape = result.breakpoints[Breakpoints.WebLandscape];
    });
  }
}
