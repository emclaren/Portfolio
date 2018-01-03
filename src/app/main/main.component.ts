import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import * as Shuffle from 'shufflejs';
import {AfterContentInit, ContentChildren, Directive, QueryList, Renderer, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var System: any; 
// import { fadeInAnimation } from './../_animations/index';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ],
    // animations: [fadeAnimation]   // make fade in animation available to this component
    // animations: [fadeInAnimation],
 
    // attach the fade in animation to the host (root) element of this component
    // host: { '[@fadeInAnimation]': '' }
 
})





export class MainComponent implements OnInit {
  projects: Project[] = [];
  @ViewChild('shuffleGrid') shuffleGrid: ElementRef;
 


  constructor(private projectService: ProjectService) { }

  ngOnInit() { 
    
 
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





