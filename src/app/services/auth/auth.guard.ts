import { Observable } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (localStorage['token'] === "hxqWS8773D") {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}