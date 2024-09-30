import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const loggedUser = localStorage.getItem('userLogin');

  if (loggedUser) {
    return true;
  } else {
    
    // messageService.add({severity: 'warn', summary: 'Warning', detail: 'You need to login to access this page', closable: true});
    router.navigateByUrl('login');
    return false;
  }
};
