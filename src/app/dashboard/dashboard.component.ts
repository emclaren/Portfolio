import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import * as Shuffle from 'shufflejs';
import {AfterContentInit, ContentChildren, Directive, QueryList, Renderer } from '@angular/core';
import {  ViewChild, ElementRef, AfterViewInit } from '@angular/core';



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
    console.log("hi")
  }

  ngAfterViewInit() {



    const shuffleInstance = new Shuffle(this.myId.nativeElement, {
  
});

  }

  getProjects(): void {
    this.projectService.getProjects()
    .subscribe(projects => this.projects = projects.slice(0, 5));
  }

}





















