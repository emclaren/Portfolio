// import { Component } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';
import { Component, HostBinding, ViewChild } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   animations: [fadeAnimation]
})

export class AppComponent {
  title = 'Elgin-Skye McLaren';
  // PageScrollConfig.defaultScrollOffset = 5000px;
    // this.ngxScrollToEasing = 'easeOutElastic';

     constructor() {
        PageScrollConfig.defaultScrollOffset = 100;
        PageScrollConfig.defaultEasingLogic = {
            ease: (t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    }
    public getRouterOutletState(outlet) {
  return outlet.isActivated ? outlet.activatedRoute : '';
}
}


