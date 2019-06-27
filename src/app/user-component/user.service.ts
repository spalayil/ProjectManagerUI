import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../user.model';
import { Observable} from 'rxjs';
import {catchError} from "rxjs/internal/operators";
import {map} from "rxjs/internal/operators";
import { throwError } from 'rxjs';

const Base_Url_User ="localhost:9000/ProjectManager/User"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(user:User) : Observable<any>{
    return this.http.post(Base_Url_User,user).pipe(
      map((response :Response )=>this.formatResponse(response)),
      catchError(this.handleError)
      
    )
   
  }

  getUsers(): Observable<any>
  {
    return this.http.get(Base_Url_User).pipe(
    map((response :Response )=>this.formatResponse(response)),
    catchError(this.handleError))
  }
  handleError(error:Error):Observable<Error>
  {
    console.log("Error Happened at the Service side ::::"+ JSON.stringify(error.message) );
    return throwError(error);
  }
  formatResponse(response:any)
  {
    console.log(JSON.stringify(response))
    return response;
  }
}
