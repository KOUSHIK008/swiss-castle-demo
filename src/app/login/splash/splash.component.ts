import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  animations: [
    trigger('zoomIn', [
      transition(':enter', [
        style({ transform: 'scale(0.1)' }),
        animate('800ms ease-in', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class SplashComponent implements OnInit{
  animationState = 'in';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.animationState = 'in';
    setTimeout(() => {
      this.router.navigate(['/getstarted']);
    }, 3000); // 3000 milliseconds (3 seconds)
  }
}
