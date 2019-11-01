import { SideFilter } from './../../side-filter/shared/side-filter.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Animal } from './animal.model';

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

  filterAnimals(filter: SideFilter, retornarImagem: boolean = false) {
    return this.httpClient.post(this.urlService, filter, {
      params: {
        acao: 'filtro'
      }
    });
  }

  create(animal: Animal) {
    return this.httpClient.post(this.urlService, animal);
  }

  update(animal: Animal) {
    return this.httpClient.put(this.urlService, animal);
  }

  delete(id: Number) {
    return this.httpClient.delete(`${this.urlService}/${id}`);
  }

}
