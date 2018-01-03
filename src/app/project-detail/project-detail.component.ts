
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as Shuffle from 'shufflejs';
import { Project }         from '../project';
import { ProjectService }  from '../project.service';
import { Router, NavigationEnd } from '@angular/router';
import {AfterContentInit, ContentChildren, Directive, QueryList, Renderer, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { fadeInAnimation } from './../_animations/index';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import { ViewEncapsulation} from '@angular/core';
// import {  state} from '@angular/animations';


// const fadeIn = [
//   query(':leave', {optional: true}, style({ position: 'absolute', left: 0, right: 0, opacity: 1 })), 
//   query(':enter', {optional: true}, style({ position: 'absolute', left: 0, right: 0, opacity: 0 })), 
//   query(':leave', {optional: true}, animate('1s', style({ opacity: 0 }))),
//   query(':enter', {optional: true}, animate('1s', style({ opacity: 1 })))
// ]



@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: [ './project-detail.component.scss' ],
  // animations: [fadeInAnimation],
  // host: { '[@fadeInAnimation]': '' },
    /* Allow CSS in this component to cascade down to child components */
  // encapsulation: ViewEncapsulation.None,
  // animations: [
  //   trigger('routerAnimations', [
  //     transition('* => *', fadeIn)
  //   ])
  // ]

})






export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;
  @ViewChild('shuffleGrid') shuffleGrid: ElementRef;
  @ViewChild('shuffleGrid2') shuffleGrid: ElementRef;
  @ViewChild('shuffleGrid3') shuffleGrid: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProject();


 }
    ngAfterViewInit() {
 const shuffleInstance = new Shuffle(this.shuffleGrid.nativeElement, {  });
 const shuffleInstance = new Shuffle(this.shuffleGrid.nativeElement, {  });
   const shuffleInstance = new Shuffle(this.shuffleGrid.nativeElement, {  });
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }



}





  // this.router.events.subscribe((evt) => {
  //           if (!(evt instanceof NavigationEnd)) {
  //               return;
  //           }
  //         
  //           window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //       });



 // this.router.events.subscribe((evt) => {
 //        if (!(evt instanceof NavigationEnd)) {
 //            return;
       
 //        }
      
 //        document.body.scrollTop = 0;
 //        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
 //    });



// import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';

// import { Project }         from '../project';
// import { ProjectService }  from '../project.service';
// import { Router, NavigationEnd } from '@angular/router';

// @Component({
//   selector: 'app-project-detail',
//   templateUrl: './project-detail.component.html',
//   styleUrls: [ './project-detail.component.scss' ]
// })
// export class ProjectDetailComponent implements OnInit {
//   @Input() project: Project;
 

//   constructor(
//     private route: ActivatedRoute,
//     private projectService: ProjectService,
//     private location: Location,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.getProject();
 


//  this.router.events.subscribe((evt) => {
//         if (!(evt instanceof NavigationEnd)) {
//             return;
//         }
//         // document.body.scrollTop = 0;
//         window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
//     });



//   }

//   getProject(): void {
//     const id = +this.route.snapshot.paramMap.get('id');
//     this.projectService.getProject(id)
//       .subscribe(project => this.project = project);
//   }

//   goBack(): void {
//     this.location.back();
//   }



// }


// ]

   
   
