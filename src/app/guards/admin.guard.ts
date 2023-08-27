import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { users } from 'src/types/users.type';

export const adminGuard: CanActivateFn = (route, state) => {
  const storedData = localStorage.getItem('userData');
      if (storedData) {
        const parsedData:users = JSON.parse(storedData);
        const isAdmin = parsedData.isAdmin
        if(isAdmin){
          return true;
        }
      }
        alert('you do not have permission to access this route')
        inject(Router).navigate(['/'])
        return false;
     
};
