import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import * as Shuffle from 'shufflejs';
import {AfterContentInit, ContentChildren, Directive, QueryList, Renderer } from '@angular/core';
import {  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as p5 from '../../assets/p5.min.js';

// import '../../assets/p5.min.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})

export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  @ViewChild('myId') myId: ElementRef;


  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
    console.log(this.myId.nativeElement);
    console.log(p5);
    console.log("Hi! Thanks for checking out my website. ")
  }

  ngAfterViewInit() {
    const shuffleInstance = new Shuffle(this.myId.nativeElement, {  });
   
  }

  getProjects(): void {
    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects.slice(0, 6));
  }




//  setup():void  {
//   console.log ("I logged this in setup");
// // var flock;
// // var r;
// //  cnv = createCanvas(windowWidth, windowHeight);
// //  centerCanvas();
// //  flock = new Flock();

// //   // Add an initial set of boids into the system
// //   for (var i = 0; i < 9; i++) {
// //     var b = new Boid(5,1000);
// //     flock.addBoid(b);

// //   }
// }





}











//  setup() {
//   console.log ("I logged this in setup");
// // var flock;
// // var r;
// //  cnv = createCanvas(windowWidth, windowHeight);
// //  centerCanvas();
// //  flock = new Flock();

// //   // Add an initial set of boids into the system
// //   for (var i = 0; i < 9; i++) {
// //     var b = new Boid(5,1000);
// //     flock.addBoid(b);

// //   }
// }











