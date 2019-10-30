import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppService } from '../shared/app/app.service';
import { AuthService } from '../components/login/shared/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AdminPageGuard implements CanActivate {
    
    public constructor(private appService: AppService, private router: Router, private authService: AuthService) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if(this.authService.isUserLogged()) {
            this.showAdminMenu();
            this.hideMainMenu();
            return true;
        }
        this.router.navigate(['']);
        return false;
    }

    hideMainMenu() {
        this.appService.updateMainMenuVisibility(false);
    }

    hideAdminMenu() {
        this.appService.updateAdminMenuVisibility(false);
    }
    
    showMainMenu() {
        this.appService.updateMainMenuVisibility(true);
    }

    showAdminMenu() {
        this.appService.updateAdminMenuVisibility(true);
    }
}