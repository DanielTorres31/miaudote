import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from 'src/app/components/animal/shared/animal.service';
import { Animal } from 'src/app/components/animal/shared/animal.model';
import { AnimalUtils } from './../shared/animal-utils';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {

  animal: Animal = new Animal();

  constructor(private route: ActivatedRoute, private animalService: AnimalService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {

      this.animalService.findById(param['id'], true).subscribe((response: any) => {
        this.animal = AnimalUtils.enrichmentAnimal(response.data);
      });

    });
  }

}
