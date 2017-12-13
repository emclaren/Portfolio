import { Component } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Elgin-Skye McLaren';
     constructor() {
        PageScrollConfig.defaultInterruptible= false;
       PageScrollConfig.defaultDuration= 1000;
        PageScrollConfig.defaultScrollOffset = 100;
        PageScrollConfig.defaultEasingLogic = {
            ease:(t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    }

  //   constructor(router: Router) {
  //   router.events.subscribe(s => {
  //     if (s instanceof NavigationEnd) {
  //       const tree = router.parseUrl(router.url);
  //       if (tree.fragment) {
  //         // you can use DomAdapter
  //         const element = document.querySelector("#" + tree.fragment);
  //         if (element) { element.scrollIntoView(element); }
  //       }
  //     }
  //   });
  
  // }  
}




