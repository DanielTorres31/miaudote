import { Institution } from './institution.model';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InstitutionService {

    urlService = `${environment.urlApi}/Instituicao.php`;

    constructor(private http: HttpClient) { }
    
    create(institution: Institution) {
        return this.http.post(this.urlService, institution);
    }

    update(institution: Institution) {
        return this.http.put(this.urlService, institution);
    }

    delete(id: Number) {
        return this.http.delete(`${this.urlService}/${id}`);
    }

    findAll() {
        return this.http.get(this.urlService);
    }

    findById(id: Number) {
        return this.http.get(`${this.urlService}/${id}`);
    }

}
