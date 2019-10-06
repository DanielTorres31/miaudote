import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-initial',
  templateUrl: './carousel-initial.component.html',
  styleUrls: ['./carousel-initial.component.scss']
})
export class CarouselInitialComponent implements OnInit {

  images = [
    { 
      source: '../../../assets/carousel/carousel-image-1-1024x400.png', 
      alt: '"Não importa que sejam poucas as suas posses e o seu dinheiro. Ter um cão torna-o rico."' ,
      title: 'Louis Sabin',
    },
    { 
      source: '../../../assets/carousel/carousel-image-2-1024x400.png', 
      alt: '"Adote, porque o amor não tem preço nem raça."' ,
      title: 'Priscilla Ochiro Capitelli',
    },
    { 
      source: '../../../assets/carousel/carousel-image-3-1024x400.png',
      alt: '"Um miau massageia o coração."',
      title: 'Stuart McMillan', 
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
