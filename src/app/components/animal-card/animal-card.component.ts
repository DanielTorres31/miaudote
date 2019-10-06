import { Component, OnInit, Input } from '@angular/core';
import { Animal } from 'src/app/shared/animal/animal.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/shared/animal/animal.service';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss']
})
export class AnimalCardComponent implements OnInit {

  @Input() animal: Animal = new Animal();

  constructor(private sanitizer: DomSanitizer, private router: Router, private animalService: AnimalService) { }

  ngOnInit() {

  }

  navigateToDetails() {
    this.router.navigate(['/']);
  }

}
