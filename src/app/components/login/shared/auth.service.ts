import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from './login.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    urlService = `${environment.urlApi}/Auth.php`

    public constructor(private http: HttpClient) {}

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