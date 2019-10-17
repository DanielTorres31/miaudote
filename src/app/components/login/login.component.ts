import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/shared/app/app.service';
import { AuthService } from './shared/auth.service';
import { Login } from './shared/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  login: Login = new Login();

  constructor(private router: Router, private appService: AppService, private authService: AuthService) { }

  ngOnInit() {
    this.hideMenu();
  }

  sendLogin() {
    this.authService.login(this.login).subscribe((response: any) => {
      if(!response.erro) {
        this.router.navigate(['admin']);
      }
    })
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
