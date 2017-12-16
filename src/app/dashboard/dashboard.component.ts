import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import * as Shuffle from 'shufflejs';
import {AfterContentInit, ContentChildren, Directive, QueryList, Renderer } from '@angular/core';
import {  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import {Component} from '@angular/core';

// import * as p5 from '../../assets/p5.min.js';
// declare var p5: any;
// import '../../assets/p5.min.js';
// import * as xJS from './x.js';
declare var System: any; 


// import {Ng2PageScrollModule} from 'ng2-page-scroll';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ],
  // animations: [fadeAnimation]
})

export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  @ViewChild('shuffleGrid') shuffleGrid: ElementRef;
 


  constructor(private projectService: ProjectService) { }

  ngOnInit() { 
    console.log("Hi, thanks for checking out my code. 😜😜😜");
    this.getProjects();
       


  }

  ngAfterViewInit() {
 const shuffleInstance = new Shuffle(this.shuffleGrid.nativeElement, {  });

 
  }

  getProjects(): void {
    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects.slice(0, 6));
  }


}





