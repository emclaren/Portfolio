import { Component } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';

import {  OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Router, NavigationEnd } from '@angular/router';
import { ViewChild, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})


export class AppComponent {
  title = 'Elgin-Skye McLaren';
  constructor( private route: ActivatedRoute,

    private location: Location,
    private router: Router) {
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


      ngOnInit(): void {

        this.router.events.subscribe((evt) => {
          window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        });

        console.log("Hi, thanks for checking out my code. 😜😜😜");
        console.log("Let me know what you think - emclaren@sfu.ca");


      }

    }



  





//Might work for preloading images

  //  if (document.getElementById) {
  //   document.getElementById("preload-01").style.background = "url(http://domain.tld/image-01.png) no-repeat -9999px -9999px";
  //   document.getElementById("preload-02").style.background = "url(http://domain.tld/image-02.png) no-repeat -9999px -9999px";
  //   document.getElementById("preload-03").style.background = "url(http://domain.tld/image-03.png) no-repeat -9999px -9999px";
  // }
