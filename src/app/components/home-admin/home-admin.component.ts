import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/shared/app/app.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit, OnDestroy {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.hideMainMenu();
  }

  ngOnDestroy() {
    this.showMainMenu();
  }

  hideMainMenu() {
    this.appService.updateMainMenuVisibility(false);
  }

  showMainMenu() {
    this.appService.updateMainMenuVisibility(true);
  }

}
