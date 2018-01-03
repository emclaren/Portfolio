import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent }         from './app.component';
import { MainComponent }   from './main/main.component';
import { ProjectDetailComponent }  from './project-detail/project-detail.component';
import { ProjectsComponent }      from './projects/projects.component';
import { ProjectService }          from './project.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { AppRoutingModule }     from './app-routing.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

/*Note changing this module MAY break the autoscroll to top on project pages*/

@NgModule({
  imports: [
   BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    Ng2PageScrollModule,
  ],
  declarations: [
    AppComponent,
    MainComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    MessagesComponent
  ],
  providers: [ ProjectService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

