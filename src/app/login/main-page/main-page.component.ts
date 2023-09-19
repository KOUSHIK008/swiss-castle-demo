import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
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

  steps = [
    { completed: true },
    { completed: true },
    { completed: false },
    { completed: false },
    // Add more steps as needed
  ];

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

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
