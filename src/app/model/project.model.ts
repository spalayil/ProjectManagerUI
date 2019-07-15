import {User} from '../user.model';
export class Project {
    
    
    ProjectId : number;
    projectName : String;
    priority : number;
    startDate : Date;
    endDate :Date;
    manager :User= new User;
}
