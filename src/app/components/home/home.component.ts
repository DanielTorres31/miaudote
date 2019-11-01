import { SideFilter } from './../side-filter/shared/side-filter.model';
import { AnimalService } from './../animal/shared/animal.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Animal } from '../animal/shared/animal.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 animals: Animal[] = new Array<Animal>();

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals() {
    this.animalService.findAll(true).subscribe((response: any) => {
      this.animals = response.data;
    });
  }

  changeFilter(event: any) {
    this.animalService.filterAnimals(event.filter, true).subscribe((response: any) => {
      this.animals = response.data;
    });
  }

}
