import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Project } from './project';
import { PROJECTS } from './my-projects';
import { MessageService } from './message.service';



@Injectable()
export class ProjectService {

  constructor(private messageService: MessageService) { }


getProjects(): Observable<Project[]> {
 this.messageService.add('ProjectService: fetched projects');
  return of(PROJECTS);
}

  getProject(id: number): Observable<Project> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`ProjectService: fetched project id=${id}`);
    return of(PROJECTS.find(project => project.id === id));
  }

}


