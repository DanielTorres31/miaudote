import { Router } from '@angular/router';
import { AnimalService } from './../shared/animal.service';
import { Header } from './../../../html-components/table/shared/header.model';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../shared/animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  title = 'Animais';

  animals: Animal[] = new Array<Animal>();

  headers: Header[] = [
    { label: 'Nome', value: 'NOM_ANIMAL' },
    { label: 'Data Cadastro', value: 'DAT_CADASTRO' },
    { label: 'Instituição', value: 'NOM_INSTITUICAO' },
  ]

  constructor(private animalService: AnimalService, private router: Router) { }

  ngOnInit() {
    this.animalService.findAll().subscribe((response: any) => {
      this.animals = response.data;
    });
  }

  openFormNewAnimal() {
    this.router.navigate(['animal/novo']);
  }

  openFormEditAnimal(animal: Animal) {
    this.router.navigate(['animal', animal.COD_ANIMAL]);
  }

}
