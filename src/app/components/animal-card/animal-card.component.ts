import { Component, OnInit, Input } from '@angular/core';
import { Animal } from 'src/app/components/animal/shared/animal.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss']
})
export class AnimalCardComponent implements OnInit {

  @Input() animal: Animal = new Animal();

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToDetails() {
    this.router.navigate(['detalhes', this.animal.COD_ANIMAL]);
  }

}
