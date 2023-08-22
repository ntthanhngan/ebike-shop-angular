import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }
}

export function canActivateFn(authService: AuthService, router: Router): (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => boolean | UrlTree {
  return (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {
    if (authService.isLoggedIn()) {
      return true;
    } else {
      return router.createUrlTree(['/login']);
    }
  };
}
