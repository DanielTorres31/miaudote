import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InstitutionService {

    urlService = `${environment.urlApi}/Instituicao.php`;

    constructor(private http: HttpClient) { }
    
    findAll() {
        return this.http.get(this.urlService);
    }

    findById(id: Number) {
        return this.http.get(`${this.urlService}/${id}`);
    }

}
