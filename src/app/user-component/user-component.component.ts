import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms'; 
import {User} from '../user.model';
import * as _ from "lodash";
import {UserService} from './user.service'
@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponent implements OnInit {


  constructor(private formBuilder :FormBuilder , private userService:UserService) { }
  addUserGroup: FormGroup=null;
  EditUserGroup:FormGroup=null;
  user : User = new User;
  display='none';
  userToBeEdited:User= new User;
  public userList=[];
  ngOnInit() {

    this.getUserData();

    this.addUserGroup= this.formBuilder.group({

      'firstName': new FormControl(this.user.firstName,Validators.required),
      'lastName': new FormControl(this.user.lastName,Validators.required),
      'employeeID': new FormControl(this.user.employeeID, Validators.required)
    })
    this.EditUserGroup= this.formBuilder.group({
      
            'firstName': new FormControl(this.user.firstName,Validators.required),
            'lastName': new FormControl(this.user.lastName,Validators.required),
            'employeeID': new FormControl(this.user.employeeID, Validators.required)
          })
  
  
  }

  AddNewUser(){

    console.log("Inside Add New User!!")
    this.userService.addUser(this.user).subscribe(
      result => {
       
        console.log(result)
        alert("Succesfully added User!")
        //Reloading the data
        this.getUserData();
        this.reset();
        
      },

      error =>{
        alert("ERROR :::"+JSON.stringify(error.message));
        this.getUserData();
        this.reset();
      }
    )

  }
  EditUser()
  {
    this.userService.updateUer(this.userToBeEdited).subscribe(
    
      response =>{
        alert("Sucessfully Edited!")
        this.closePopUp();
        this.getUserData();
      },
      error =>{

        alert("ERROR :::"+JSON.stringify(error.message));
      }


    )

  }

  deleteUser(user:User)
  {
    
    this.userService.deleteUser(user).subscribe(
      
        response =>{
          alert("Sucessfully Deleted!")
          this.closePopUp();
          this.getUserData();
        },
        error =>{
  
          alert("ERROR :::"+JSON.stringify(error.message));
        }
  
  
      )
  
  }

  get f()
  {
    return this.addUserGroup.controls;
  }

  get fa()
  {
    return this.EditUserGroup.controls;
  }
  reset()
  {
    this.user= new User;
    this.addUserGroup.reset();

  }
  sortfunction(sortBy)
  {
    this.userList = _.orderBy(this.userList, [sortBy], ["asc"]);
  }
  openPopUp(userTobeEdited:User)
  {
    this.userToBeEdited=userTobeEdited;
    this.display='block';

  }
  closePopUp()
  {

    this.display='none';
    this.getUserData();
  }

  getUserData()
  {
    
    this.userService.getUsers().subscribe(
      result => {
       
        console.log(result);
        this.userList = result;
      },

      error =>{
        alert("ERROR WHILE FETCHING USER LIST:::"+JSON.stringify(error.message));
      }
    )
  }

}
