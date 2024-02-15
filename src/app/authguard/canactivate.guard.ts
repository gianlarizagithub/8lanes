import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const canactivateGuard: CanActivateFn = 
(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
Observable<boolean | UrlTree> 
| Promise<boolean | UrlTree> 
| boolean 
| UrlTree => 
{
 
  return inject(AuthService).isLoggedIn 
  ? true : inject(Router).createUrlTree(['/auth/login']) 



}
