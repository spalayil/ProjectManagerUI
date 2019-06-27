import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as _ from "lodash";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user-component/user-component.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { TaskComponentComponent } from './task-component/task-component.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchUserPipe } from './user-component/search-user.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProjectComponentComponent,
    TaskComponentComponent,
    SearchUserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
