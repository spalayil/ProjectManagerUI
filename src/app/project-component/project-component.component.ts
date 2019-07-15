import { Component, OnInit } from '@angular/core';
import {Project} from '../model/project.model';
import {FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms'; 
import * as _ from "lodash";
import {ProjectService} from '../project-component/project.service'
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.css']
})
export class ProjectComponentComponent implements OnInit {

  project:Project = new Project;
  addProjectGroup : FormGroup= null;
  EditProjectGroup:FormGroup=null;
  display='none';
  isChecked : boolean= false;
  projectTobeEdited:Project= new Project;
  public projectList=[];
  constructor(private formBuilder :FormBuilder,private projectService:ProjectService, private datePipe:DatePipe) { }

  ngOnInit() {

    this.getProjectData();

    this.addProjectGroup= this.formBuilder.group({
      
            'ProjectName': new FormControl(this.project.projectName,Validators.required),
            'priority': new FormControl(this.project.priority,Validators.required),
            'manager': new FormControl(this.project.manager,Validators.required),
           
          })
          this.EditProjectGroup= this.formBuilder.group({
            
                
            'ProjectName': new FormControl(this.project.projectName,Validators.required),
            'priority': new FormControl(this.project.priority,Validators.required),
            'manager': new FormControl(this.project.manager,Validators.required),
                })
  }

  AddNewProject()
  {
    console.log("Project::"+JSON.stringify(this.project));
    console.log("Inside Add New User!!"+this.project.projectName);
    this.projectService.addProject(this.project).subscribe(
      result => {
       
        console.log(result)
        alert("Succesfully added User!")
        //Reloading the data
        this.getProjectData();
        this.reset();
        
      },

      error =>{
        alert("ERROR :::"+JSON.stringify(error.message));
        this.getProjectData();
        this.reset();
      });
  }
  

  get f()
  {
    return this.addProjectGroup.controls;
  }

  get fa()
  {
    return this.EditProjectGroup.controls;
  }
  reset()
  {
    this.project= new Project;
    this.addProjectGroup.reset();

  }
  sortfunction(sortBy)
  {
    this.projectList = _.orderBy(this.projectList, [sortBy], ["asc"]);
  }
  openPopUp(projectTobeEdited:Project)
  {
    this.projectTobeEdited=projectTobeEdited;
    this.display='block';

  }
  closePopUp()
  {

    this.display='none';
    this.getProjectData();
  }

  getProjectData(){

    console.log("Fetching list of project from service")
    this.projectService.getProject().subscribe(
      result => {
       
        console.log(result);
        this.projectList = result;
        
      },

      error =>{
        alert("ERROR WHILE FETCHING USER LIST:::"+JSON.stringify(error.message));
      }
    )
  }
  EditProject()
  {
    this.projectService.updateProject(this.projectTobeEdited).subscribe(
      result => {
       
        alert("Successfully Edited!!")
        this.projectList = result;
        this.closePopUp();
       
        
      },

      error =>{
        alert("ERROR WHILE FETCHING USER LIST:::"+JSON.stringify(error.message));
        this.getProjectData;
      }
    )
  }

  setStartEndDates() {
    
   this.datePipe = new DatePipe('en-US');
     this.project.startDate= this.isChecked ? new Date(): null,
     this.project.endDate= this.isChecked ? moment().add({ days: 1 }).toDate() : null
    
     console.log("StartDate:"+this.project.startDate);
   }


  }



