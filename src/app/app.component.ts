import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppService } from './shared/app/app.service';

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Miaudote';

  isMainMenuVisible: boolean;
  isAdminMenuVisible: boolean;

  public constructor(private appService: AppService, private changeDetector: ChangeDetectorRef) {}  

  public ngOnInit() {
    this.handleVisibilityMainMenu();
    this.handleVisibilityAdminMenu();
  }

  handleVisibilityMainMenu() {
    this.appService.isMainMenuVisible.subscribe(isMainMenuVisible => {
      this.isMainMenuVisible = isMainMenuVisible;
      this.changeDetector.detectChanges();
    });
  }

  handleVisibilityAdminMenu() {
    this.appService.isAdminMenuVisible.subscribe(isAdminMenuVisible => {
      this.isAdminMenuVisible = isAdminMenuVisible;
      this.changeDetector.detectChanges();
    });
  }

}
