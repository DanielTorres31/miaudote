import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/components/animal/shared/animal.service';
import { Animal } from 'src/app/components/animal/shared/animal.model';

@Component({
  selector: 'app-animals-view',
  templateUrl: './animals-view.component.html',
  styleUrls: ['./animals-view.component.scss']
})
export class AnimalsViewComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  animals: Animal[] = new Array<Animal>();

  ngOnInit() {
    this.animalService.findAll(true).subscribe((response: any) => {
      this.animals = response.data;
    });
  }

}
