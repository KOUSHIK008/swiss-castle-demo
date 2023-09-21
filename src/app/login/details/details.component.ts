import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
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

  letters(event: KeyboardEvent): boolean {
    const charCode = event.key.charCodeAt(0);
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && charCode !== 32) {
     return false;
    }
    return true;
  }

  date(event: KeyboardEvent): boolean {
    const charCode = event.key.charCodeAt(0);
    if ((charCode >= 48 && charCode <= 57) || charCode === 47) {
      return true;
    }
    return false;
  }
  
  constructor(private breakpointObserver: BreakpointObserver,private router: Router) { }
  
  navigateselectOrderType() {
    this.router.navigate(['/order']);
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
