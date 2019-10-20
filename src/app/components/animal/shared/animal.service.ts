import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private httpClient: HttpClient) { }

  urlService = `${environment.urlApi}/Animal.php`;

  findAll(retornarImagem: boolean = false) {
    return this.httpClient.get(this.urlService, {
      params: {
        retornarImagem: retornarImagem ? 'T' : 'F'
      }
    });
  }

  findById(id: number, retornarImagem: boolean = false) {
    return this.httpClient.get(`${this.urlService}/${id}`, {
      params: {
        retornarImagem: retornarImagem ? 'T' : 'F'
      }
    });
  }

}
