import { Component } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';

import {  OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project }         from '../project';
import { ProjectService }  from '../project.service';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

        // document.body.scrollTop = 0;
    });



  }


}




