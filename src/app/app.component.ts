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

  public constructor(private appService: AppService, private changeDetector: ChangeDetectorRef) {}  

  public ngOnInit() {
    this.appService.isMainMenuVisible.subscribe(isMainMenuVisible => {
      this.isMainMenuVisible = isMainMenuVisible;
      this.changeDetector.detectChanges();
    });
  }

}
