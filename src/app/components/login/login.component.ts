import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/shared/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.hideMenu();
  }

  ngOnDestroy() {
    this.showMenu();
  }

  showMenu() {
    this.appService.updateMainMenuVisibility(true);
  }

  hideMenu() {
    this.appService.updateMainMenuVisibility(false);
  }


}
