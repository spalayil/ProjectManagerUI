import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Project} from '../model/project.model';
import { Observable} from 'rxjs';
import {catchError} from "rxjs/internal/operators";
import {map} from "rxjs/internal/operators";
import { throwError } from 'rxjs';
const Base_Url_User ="http://localhost:9000/project"

@Injectable({
  providedIn: 'root'
})
export class ProjectService {



  constructor(private http:HttpClient) { }
  
    addProject(project:Project) : Observable<any>{
      
      return this.http.post(Base_Url_User+"/addproject",project).pipe(
        map((response :Response )=>this.formatResponse(response)),
        catchError(this.handleError)
        
     )
     
    }
    
  
    deleteProject(project:Project) : Observable<any>
    {
      
      
      return this.http.delete(Base_Url_User+"/projectDelete/"+project.ProjectId).pipe(
        map((response :Response )=>this.formatResponse(response)),
        catchError(this.handleError)
      )
    }
  
    updateProject(project:Project) : Observable<any>{
      return this.http.put(Base_Url_User+"/projectUpdate",project).pipe(
        map((response :Response )=>this.formatResponse(response)),
        catchError(this.handleError)
      )
    }
  
    getProject(): Observable<any>
    {
  
      
      return this.http.get(Base_Url_User+'/projectList').pipe(
      map((response :Response )=>this.formatResponse(response)),
      catchError(this.handleError));
    }
    handleError(error:Error):Observable<Error>
    {
      console.log("Error Happened at the Service side ::::"+ JSON.stringify(error.message) );
      console.log(JSON.stringify(error))
      return throwError(error);
    }
    formatResponse(response:any)
    {
      
      console.log("Response Here::"+JSON.stringify(response))
      return response;
    }
}




