import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as _ from "lodash";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user-component/user-component.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchUserPipe } from './user-component/search-user.pipe';
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';
import { ProjectPipe } from './project-component/project.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProjectComponentComponent,
    SearchUserPipe,
    TaskcomponentComponent,
    ProjectPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
