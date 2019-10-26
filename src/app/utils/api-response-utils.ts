import { MessageService } from 'primeng/api';
import { MessageUtils } from './message-utils';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiResponseUtils {

    public constructor(private messageService: MessageService) {}

    public validatesResponseError(response: HttpErrorResponse, defaultMessage: string) {
        const error = response.error;
        if (error.erro) {
            if (error.mensagens && error.mensagens.length > 0) {
                error.mensagens.forEach(message => {
                    this.messageService.add(MessageUtils.createErrorMessage(message));
                });
            } else {
                this.messageService.add(MessageUtils.createErrorMessage(defaultMessage));
            }
        }
    }

}