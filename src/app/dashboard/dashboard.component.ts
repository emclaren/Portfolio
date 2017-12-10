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




  export class AppComponent implements AfterViewInit {
    @ViewChild('myId') myId: ElementRef;

  
    constructor() {
    }

    ngAfterViewInit() {
      console.log(this.myId.nativeElement);
      console.log("hi")
    }
  }










// @Directive({ 
//   selector: 'li' 
// })
// export class ListItem {}

// @Component({
//   selector: 'my-list'
// })


// export class MyList implements AfterContentInit {
  
//   @ContentChildren(ListItem) items: QueryList<ListItem>;
//   ListItem.shouldShow = false;

//   ngAfterContentInit() {
//  // this.renderer.invokeElementMethod(this.input.nativeElement,    
//  //    'focus');
//   }
// }

 
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
    

const shuffleInstance = new Shuffle(this.myId.nativeElement) {
  // itemSelector: '.js-item',
  // sizer: '.js-shuffle-sizer'
});

   
  }
 
  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects.slice(0, 5));
      
  }

}






// import { Component, OnInit } from '@angular/core';
// import { Project } from '../project';
// import { ProjectService } from '../project.service';
// // import * as Shuffle from 'shufflejs';
 
// declare var p5: any;


 
// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: [ './dashboard.component.scss' ]
// })

// export class DashboardComponent implements OnInit {
//   projects: Project[] = [];
 


//  play: boolean = false;



//   constructor(private projectService: ProjectService) { }
 
//   ngOnInit() {
//     this.getProjects();


//     const s = (p) => {

//       let song;
//       let canvas;

//       p.preload = () => {
//         console.log('preload');
//         // song = p.loadSound('assets/music/Thunderstruck.mp3');
//       }

//       p.setup = () => {
//         canvas = p.createCanvas(595, 100);
//         canvas.parent('equalizer');
//         p.background(0);
//       }
//     }

//     let player = new p5(s);

//   }
 
//   getProjects(): void {
//     this.projectService.getProjects()
//       .subscribe(projects => this.projects = projects.slice(0, 5));
      
//   }



//   onPlay() {
//     this.play = !this.play;

//   }

// }






  







  

