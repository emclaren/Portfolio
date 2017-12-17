import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainComponent }   from './main/main.component';

import { ModuleWithProviders } from '@angular/core';

import { ProjectsComponent }      from './projects/projects.component';
import { ProjectDetailComponent }  from './project-detail/project-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'detail/:id', component: ProjectDetailComponent },
  { path: 'projects', component: ProjectsComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


