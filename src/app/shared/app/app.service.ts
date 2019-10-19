import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private dataSourceMainMenuVisibility = new BehaviorSubject<boolean>(true);
    isMainMenuVisible = this.dataSourceMainMenuVisibility.asObservable();

    constructor() { }

    public updateMainMenuVisibility(isMainMenuVisible: boolean) {
        this.dataSourceMainMenuVisibility.next(isMainMenuVisible);
    }

}
