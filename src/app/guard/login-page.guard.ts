import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppService } from '../shared/app/app.service';

@Injectable({
    providedIn: 'root'
})
export class LoginPageGuard implements CanActivate {
    
    public constructor(private appService: AppService) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.hideMainMenu();
        this.hideAdminMenu();

        return true;
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