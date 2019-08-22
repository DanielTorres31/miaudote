import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private httpClient: HttpClient) { }

  urlService = `${environment.urlApi}/Animal.php/`;

  buscarTodos() {
    return this.httpClient.get(this.urlService);
  }

}
