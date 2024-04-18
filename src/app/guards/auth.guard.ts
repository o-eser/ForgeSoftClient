import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'
import { _isAuthenticated } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private jwtHelper: JwtHelperService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {



        if (!_isAuthenticated) {

            this.router.navigate(["login"], { queryParams: { returnUrl: state.url } });

        }
        console.log(_isAuthenticated);
        return true;
    }

}