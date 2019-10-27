import { CookieService } from 'ngx-cookie-service';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from './login.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    urlService = `${environment.urlApi}/Auth.php`;

    private SESSION_COOKIE_NAME = 'PHPSESSID';

    public constructor(private http: HttpClient, private cookieService: CookieService) {}

    isUserLogged() {
        const sessionId = this.getSessionId();
        return sessionId ? true : false;
    }

    getSessionId() {
        return this.cookieService.get(this.SESSION_COOKIE_NAME);
    }

    clearSessionId() {
        this.cookieService.delete(this.SESSION_COOKIE_NAME);
    }

    login(user: Login) {
        return this.http.post(`${this.urlService}`, user, {
            params: {
                acao: 'CriarSessao'
            }
        });
    }

    checkSession() {
        return this.http.get(`${this.urlService}`, {
            params: {
                acao: 'ChecarSessao'
            }
        });
    }

    logout() {
        return this.http.get(`${this.urlService}`, {
            params: {
                acao: 'EncerrarSessao'
            }
        });
    }
}