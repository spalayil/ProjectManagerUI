import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(items: any[], userName: String): any {
    return items.filter(user =>{

      if(userName && (user.firstName.toLowerCase().indexOf(userName.toLowerCase()) == -1))
      {
        return false;
      }
      return true;
    });
  }

}
