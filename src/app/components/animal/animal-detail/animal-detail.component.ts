import { InstitutionService } from './../../institution/shared/institution.service';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from 'src/app/components/animal/shared/animal.service';
import { Animal } from 'src/app/components/animal/shared/animal.model';
import { AnimalUtils } from './../shared/animal-utils';
import { Institution } from '../../institution/shared/institution.model';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {

  animal: Animal = new Animal();

  institution: Institution = new Institution();

  constructor(private route: ActivatedRoute, private animalService: AnimalService, private institutionService: InstitutionService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {

      this.findAnimal(param['id']);

    });
  }

  findAnimal(idAnimal) {
    this.animalService.findById(idAnimal, true).subscribe((response: any) => {
      this.animal = AnimalUtils.enrichmentAnimal(response.data);
      this.findInstitution(this.animal.INSTITUICAO_COD_INSTITUICAO);
    });
  }

  findInstitution(idInstitution) {
    this.institutionService.findById(idInstitution).subscribe((response: any) => {
      this.institution = response.data;
    });
  }

}
