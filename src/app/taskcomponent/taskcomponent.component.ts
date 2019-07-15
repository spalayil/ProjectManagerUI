import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators , FormBuilder} from '@angular/forms';
import {UserService} from '../user-component/user.service'
import {ProjectService} from '../project-component/project.service'
import {Task} from '../model/task.model'
import {TaskManagerService} from './task-manager.service'

@Component({
  selector: 'app-taskcomponent',
  templateUrl: './taskcomponent.component.html',
  styleUrls: ['./taskcomponent.component.css']
})
export class TaskcomponentComponent implements OnInit {


  constructor(private formBuilder :FormBuilder,private projectService:ProjectService,private userService:UserService,private taskManagerService :TaskManagerService) { }
  invalidMessageDisplay='';
  taskData= new Task;
  addTaskFormGroup :FormGroup =null;
  public projects=[];
  public users=[];
  public tasks=[];
  isChecked:boolean=false;
  
  ngOnInit() {
    this.addTaskFormGroup = this.formBuilder.group({  
      'task': new FormControl(this.taskData.task,
       [Validators.required,Validators.minLength(5)]),
       'projectID' :new FormControl(this.taskData.projectID,
        [Validators.required]),
        'priority' :new FormControl(this.taskData.priority,
          [Validators.required]),
          'startDate' :new FormControl(this.taskData.startDate,
            [Validators.required]),
            'toDate' :new FormControl(this.taskData.endDate,
              [Validators.required]),
              'user' :new FormControl(this.taskData.userID,
                [Validators.required])
          
          // 'projectID' :new FormControl(this.taskData.task,
          //   [Validators.required])
      //  'lastName': new FormControl(this.user.lastName,Validators.required),
      //  'employeeID': new FormControl(this.user.employeeID, Validators.required)
    });
    this.userService.getUsers().subscribe(data =>{        
      this.users=data;
    });
    this.projectService.getProject().subscribe(data =>{                    
      this.projects=data;
  });
  this.taskManagerService.viewtask().subscribe((data) =>{                    
    this.tasks=data;
     });
  }
  get f() { return this.addTaskFormGroup.controls; }
 AddTask()
  {
    if(this.addTaskFormGroup.valid){
    this.taskManagerService.addTask(this.taskData).subscribe(data =>{                    
           if(data){
              alert("Task Added Successfully!");
              //this.toastr.success("Task Added Successfully!", "Task Message.");
               this.resetForm();
              }
    });
  }

  }
  resetForm()
  {
    this.addTaskFormGroup.reset();
    this.taskData= new Task;
  }
  validateParentTask()
  {
    this.taskManagerService.validateParentTask(this.taskData.parentTask).subscribe((data) =>{
                   
      this.taskData.ParentTaskID=data;
     },
    error =>{
      alert("Invalid Parent task");
      this.taskData.parentTask="";
      this.taskData.ParentTaskID=null;
    });
  }

}

