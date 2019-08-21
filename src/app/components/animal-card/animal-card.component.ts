import { Component, OnInit, Input } from '@angular/core';
import { Animal } from 'src/app/shared/animal/animal.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss']
})
export class AnimalCardComponent implements OnInit {

  @Input() animal: Animal = new Animal();

  animalInFocus: boolean = false;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  animalFocus() {
    this.animalInFocus = true;
  }

  // I feel like this thread lacks concrete examples which made me have some difficulties:

  // Import DomSanitizer:

  // import { DomSanitizer } from '@angular/platform-browser';
  // define in constructor:

  // constructor(private _sanitizer: DomSanitizer) { }
  // Sanitize the Base64 string you want to pass as your image source (use trustResourceUrl):

  // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
  //                 + toReturnImage.base64string);
  // Bind to html:

  // <img [src]="imagePath"> 

  animalFocusOut() {
    this.animalInFocus = false;
  }

  navigateToDetails() {
    console.log('Adotar');
  }

}
