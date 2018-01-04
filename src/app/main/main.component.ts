import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import * as Shuffle from 'shufflejs';
import {AfterContentInit, ContentChildren, Directive, QueryList, Renderer, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var System: any; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ],
 
 
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





