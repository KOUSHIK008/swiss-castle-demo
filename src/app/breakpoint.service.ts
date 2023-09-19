import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

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

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeBreakpoints();
  }

  private observeBreakpoints() {
    this.breakpointObserver
      .observe([
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
      ])
      .subscribe((result: BreakpointState) => {
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
