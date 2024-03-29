import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

export const canactivateloggedinGuard:CanActivateFn = 
(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
Observable<boolean | UrlTree> 
| Promise<boolean | UrlTree> 
| boolean 
| UrlTree => 
{
  return !inject(AuthService).isLoggedIn 
  ? true : inject(AuthService).currentUserLoggedInRole != null ? inject(AuthService).currentUserLoggedInRole == 'customer' ? inject(Router).createUrlTree(['/form']) : inject(Router).createUrlTree(['/admin']):  inject(Router).createUrlTree(['/auth/login'])

}