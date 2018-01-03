import { Component } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';

import {  OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import { Project }         from '../project';
// import { ProjectService }  from '../project.service';
import { Router, NavigationEnd } from '@angular/router';
import { ViewChild, ViewEncapsulation} from '@angular/core';
// import {ModalServiceService} from "./modal-service.service";
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

 
// import fade in animation
// import { fadeInAnimation } from './_animations/fade-in.animation';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   // animations: [fadeAnimation]   // make fade in animation available to this component
//     // animations: [fadeInAnimation],
 
//     // attach the fade in animation to the host (root) element of this component
//     // host: { '[@fadeInAnimation]': '' }

// })


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


  /* Allow CSS in this component to cascade down to child components */
//   encapsulation: ViewEncapsulation.None,
//   animations: [
//     trigger('routerAnimations', [
//       transition('* => main', [
//   query(':leave',  style({ position: 'absolute', left: 0, right: 0, opacity: 1 })),
//   query(':enter', style({ position: 'absolute', left: 0, right: 0, opacity: 0 })),
//   query(':leave', animate('1s', style({ opacity: 0 }))),
//   query(':enter', animate('1s', style({ opacity: 1 })))
// ]

//         )
//     ])
//   ]



  // encapsulation: ViewEncapsulation.None,
  // animations: [
  //   trigger('routerAnimations', [
  //     transition('main => 1', [
  //       query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
  //       query(':leave', style({ zIndex: 100 })),
  //       query(':enter', style({ transform: 'translateY(100%)' })),

  //       group([
  //         query(':leave', group([
  //           animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-100%)' })), // y: '-100%'
  //           animateChild()
  //         ])),
  //         query(':enter', group([
  //           animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0%)' })),
  //           animateChild()
  //         ]))
  //       ])
  //     ]),
  //     transition('1 => main', [
  //       query(':enter, :leave',
  //         style({ position: 'absolute', top: 0, left: 0, right: 0 })),
  //       query(':enter', [
  //         style({ opacity:0, transform: 'translateX(100%)'}),
  //         query('contributor', [
  //           style({ opacity:0, transform: 'scale(0)'})
  //         ])
  //       ]),

  //       query(':leave', [
  //         query('.image', [
  //           stagger(50, [
  //             animate('500ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, transform: 'translateY(-50px)' }))
  //           ])
  //         ]),
  //         animate('800ms cubic-bezier(.35,0,.25,1)', style({ opacity:0, transform: 'translateX(-100%)' }))
  //       ]),

  //       group([
  //         query(':enter', [
  //           animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
  //         ]),
  //         query(':enter contributor', [
  //           stagger(200, [
  //             animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
  //           ])
  //         ])
  //       ])
  //     ])
  //   ])
  // ]
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

   console.log("Hi, thanks for checking out my code. 😜😜😜");
    console.log("Let me know what you think - emclaren@sfu.ca");

  }

  //   public getRouterOutletState(outlet) {
  //   return outlet.isActivated ? outlet.activatedRoute : '';
  // }

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }

}





