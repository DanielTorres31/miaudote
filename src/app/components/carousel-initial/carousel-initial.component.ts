import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-initial',
  templateUrl: './carousel-initial.component.html',
  styleUrls: ['./carousel-initial.component.scss']
})
export class CarouselInitialComponent implements OnInit {

  images = [
    { 
      path: '../../../assets/carousel/s1.jpg', 
      text: '"Não importa que sejam poucas as suas posses e o seu dinheiro. Ter um cão torna-o rico."' ,
      author: '- Louis Sabin',
    },
    { 
      path: '../../../assets/carousel/s2.jpg', 
      text: '"Só os meus cães nunca me trairão."' ,
      author: '- Maria Callas',
    },
    { 
      path: '../../../assets/carousel/s3.jpg', 
      text: 'Adote, porque o amor não tem preço nem raça.',
      author: '- Priscilla Oshiro Capitelli',
    },
    { 
      path: '../../../assets/carousel/s4.jpg', 
      text: '"Um miau massageia o coração."',
      author: '- Stuart McMillan',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
