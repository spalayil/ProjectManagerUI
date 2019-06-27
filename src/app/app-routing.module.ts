import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user-component/user-component.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { TaskComponentComponent } from './task-component/task-component.component';
const routes: Routes = [

  { path: '', redirectTo: '/AddUser', pathMatch: 'full' },
  { path: 'AddTask', component: TaskComponentComponent },
  // { path: 'ViewTask', component: ViewTaskComponent },
  { path: 'AddProject', component: ProjectComponentComponent },
  { path: 'AddUser', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
