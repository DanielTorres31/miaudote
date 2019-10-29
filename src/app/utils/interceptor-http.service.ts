import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../components/login/shared/auth.service';

@Injectable()
export class InterceptorHttp implements HttpInterceptor {

    constructor(private auth: AuthService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(request).pipe(
            catchError((err: any) => {
                if (this.isRespostaTokenInvalido(err)) {
                    this.auth.closeSession();
                    return of(err);
                }
                return next.handle(request);
            })
        );

    }

    private isRespostaTokenInvalido(event) {
        return event.status == 401 ? true : false;
    }



}