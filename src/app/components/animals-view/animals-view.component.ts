import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/shared/animal/animal.service';
import { Animal } from 'src/app/shared/animal/animal.model';

@Component({
  selector: 'app-animals-view',
  templateUrl: './animals-view.component.html',
  styleUrls: ['./animals-view.component.scss']
})
export class AnimalsViewComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  animals: Animal[] = new Array<Animal>();

  ngOnInit() {
    this.animalService.buscarTodos(true).subscribe((response: any) => {
      this.animals = response.data;
    });
  }

}
