import { AnimalService } from 'src/app/components/animal/shared/animal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../shared/animal.model';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent implements OnInit {

  title: string = ''

  animal: Animal = new Animal();

  constructor(private router: Router, private route: ActivatedRoute, private animalService: AnimalService) { }

  ngOnInit() {
    this.validatesFormIsEditable();
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

  }

  deleteAnimal() {

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
