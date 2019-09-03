import { Component, OnInit, Input } from '@angular/core';
import { Animal } from 'src/app/shared/animal/animal.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss']
})
export class AnimalCardComponent implements OnInit {

  @Input() animal: Animal = new Animal();

  animalInFocus: boolean = false;

  constructor(private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
  }

  animalFocus() {
    this.animalInFocus = true;
  }

  animalFocusOut() {
    this.animalInFocus = false;
  }

  navigateToDetails(route: string) {
    this.router.navigate([route]);
  }

}
