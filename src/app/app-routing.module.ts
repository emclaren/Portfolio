import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

import { MainComponent }   from './main/main.component';
=======
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent }   from './dashboard/dashboard.component';
>>>>>>> master
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


