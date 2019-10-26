import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppService } from '../shared/app/app.service';
import { AuthService } from '../components/login/shared/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
    
    public constructor(private router: Router, private authService: AuthService) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

            if(this.authService.isUserLogged()) {
                return true;
            }
            this.router.navigate(['']);
            return false;
    }

}