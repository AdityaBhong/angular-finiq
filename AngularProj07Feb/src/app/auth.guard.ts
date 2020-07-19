import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private routes:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log("authentication");
    if(localStorage.getItem("username")!=null)
    {
      return true;
    }
    else
    {
      this.routes.navigate(['login']);
      return false;
    }  
  }
}