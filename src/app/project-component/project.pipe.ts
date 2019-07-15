import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'project'
})
export class ProjectPipe implements PipeTransform {

  transform(items: any[], projectName: String): any {
    return items.filter(project =>{
      
            if(projectName && (project.projectName.toLowerCase().indexOf(projectName.toLowerCase()) == -1))
            {
              return false;
            }
            return true;
          });
  }

}
