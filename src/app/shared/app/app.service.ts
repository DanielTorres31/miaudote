import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private dataSource = new BehaviorSubject<boolean>(true);
    isMainMenuVisible = this.dataSource.asObservable();

    constructor() { }

    public updateMainMenuVisibility(isMainMenuVisible: boolean) {
        this.dataSource.next(isMainMenuVisible);
    }

}
