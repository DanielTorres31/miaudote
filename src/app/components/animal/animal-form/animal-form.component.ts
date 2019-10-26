import { InstitutionService } from './../../institution/shared/institution.service';
import { AnimalUtils } from './../shared/animal-utils';
import { AnimalService } from 'src/app/components/animal/shared/animal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../shared/animal.model';
import { Institution } from '../../institution/shared/institution.model';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent implements OnInit {

  title: string = '';

  animal: Animal = new Animal();

  especies = AnimalUtils.especie;
  idades = AnimalUtils.idade;
  portes = AnimalUtils.porte;
  sexos = AnimalUtils.sexo;
  castradoOptions = AnimalUtils.castrado;

  institutions: Institution[] = new Array<Institution>();

  constructor(private router: Router, private route: ActivatedRoute, 
    private animalService: AnimalService, private institutionService: InstitutionService) { }

  ngOnInit() {
    this.validatesFormIsEditable();
    this.loadInstitutionOptions();
  }

  validatesFormIsEditable() {
    this.route.params.subscribe(param => {
      if(param['id']) {
        this.titleEditAnimal();
        this.animalService.findById(param['id']).subscribe((response: any) => {
          this.animal = response.data;
        });
      } else {
        this.titleNewAnimal();
      }
    });
  }

  saveAnimal() {
    console.log(this.animal);
  }

  deleteAnimal() {

  }

  loadInstitutionOptions() {
    this.institutionService.findAll().subscribe((response: any) => {
      this.institutions = response.data;
    });
  }

  closeForm() {
    this.router.navigate(['animal']);
  }

  titleNewAnimal() {
    this.title = 'Novo Animal';
  }

  titleEditAnimal() {
    this.title = 'Edição Animal';
  }

}
