import { Component, OnInit, Input } from '@angular/core';
import { AnimalService } from 'src/app/components/animal/shared/animal.service';
import { Animal } from 'src/app/components/animal/shared/animal.model';

@Component({
  selector: 'app-animals-view',
  templateUrl: './animals-view.component.html',
  styleUrls: ['./animals-view.component.scss']
})
export class AnimalsViewComponent implements OnInit {

  constructor() { }

  @Input() animals: Animal[] = new Array<Animal>();

  ngOnInit() {
  }

}
