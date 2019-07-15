import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {Task} from '../model/task.model'
@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  constructor() { }

  validateParentTask(parentTask:String): Observable<any>
  {
       return null;
  }

  viewtask(): Observable<any>
  {
   return null
  }


  addTask(taskdata:Task): Observable<any>
  {
       return null;

  }
}
