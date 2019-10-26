import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Login } from './shared/login.model';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MessageUtils } from 'src/app/utils/message-utils';
import { Messages } from 'src/app/utils/messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  MESSAGE_KEY = 'LOGIN_INVALID';

  constructor(private router: Router, private authService: AuthService, 
        private messageService: MessageService) { }

  ngOnInit() {
  }

  sendLogin() {
    this.clearAllMessageLogin();

    if(this.isFieldsInvalid()) {
      this.messageService.add( MessageUtils.createErrorMessage( Messages.LOGIN_VALIDACAO, this.MESSAGE_KEY ) );
      return;
    }

    this.authService.login(this.login).subscribe((response: any) => {
      if (!response.erro) {
        this.router.navigate(['admin']);
      }
    }, () => this.messageService.add( MessageUtils.createErrorMessage( Messages.LOGIN_ERRO, this.MESSAGE_KEY ) ))
  }

  isFieldsInvalid() {
    return !this.login.email ||
            this.login.email.trim() == '' ||
            !this.login.senha ||
            this.login.senha.trim() == ""
  }

  clearAllMessageLogin() {
    this.messageService.clear(this.MESSAGE_KEY);
  }

}
