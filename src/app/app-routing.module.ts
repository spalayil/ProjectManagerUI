import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user-component/user-component.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';
const routes: Routes = [

  { path: '', redirectTo: '/AddUser', pathMatch: 'full' },
  { path: 'AddTask', component: TaskcomponentComponent },
  // { path: 'ViewTask', component: ViewTaskComponent },
  { path: 'AddProject', component: ProjectComponentComponent },
  { path: 'AddUser', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
