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
  ? true : inject(Router).createUrlTree(['/form']) 

}