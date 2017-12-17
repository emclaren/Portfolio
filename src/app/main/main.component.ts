import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import * as Shuffle from 'shufflejs';
import {AfterContentInit, ContentChildren, Directive, QueryList, Renderer } from '@angular/core';
import {  ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var System: any; 


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ],
  // animations: [fadeAnimation]
})

export class MainComponent implements OnInit {
  projects: Project[] = [];
  @ViewChild('shuffleGrid') shuffleGrid: ElementRef;
 


  constructor(private projectService: ProjectService) { }

  ngOnInit() { 
    console.log("Hi, thanks for checking out my code. 😜😜😜");
    console.log("Let me know what you think - emclaren@sfu.ca");
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





