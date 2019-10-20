import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private dataSourceMainMenuVisibility = new BehaviorSubject<boolean>(true);
    isMainMenuVisible = this.dataSourceMainMenuVisibility.asObservable();

    private dataSourceAdminMenuVisibility = new BehaviorSubject<boolean>(false);
    isAdminMenuVisible = this.dataSourceAdminMenuVisibility.asObservable();

    constructor() { }

    public updateMainMenuVisibility(isMainMenuVisible: boolean) {
        this.dataSourceMainMenuVisibility.next(isMainMenuVisible);
    }

    public updateAdminMenuVisibility(isAdminMenuVisible: boolean) {
        this.dataSourceAdminMenuVisibility.next(isAdminMenuVisible);
    }


}
