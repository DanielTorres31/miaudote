import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from 'src/app/components/animal/shared/animal.service';
import { Animal } from 'src/app/components/animal/shared/animal.model';

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

      this.animalService.buscarPorId(param['id'], true).subscribe((response: any) => {
        this.animal = response.data;
      });

    });
  }

}
