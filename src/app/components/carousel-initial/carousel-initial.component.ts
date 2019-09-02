import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-initial',
  templateUrl: './carousel-initial.component.html',
  styleUrls: ['./carousel-initial.component.scss']
})
export class CarouselInitialComponent implements OnInit {

  images = [
    { 
      source: '../../../assets/carousel/s1.jpg', 
      alt: '"Não importa que sejam poucas as suas posses e o seu dinheiro. Ter um cão torna-o rico."' ,
      title: '- Louis Sabin',
    },
    { 
      source: '../../../assets/carousel/s2.jpg', 
      alt: '"Só os meus cães nunca me trairão."' ,
      title: '- Maria Callas',
    },
    { 
      source: '../../../assets/carousel/s3.jpg', 
      alt: 'Adote, porque o amor não tem preço nem raça.',
      title: '- Priscilla Oshiro Capitelli',
    },
    { 
      source: '../../../assets/carousel/s4.jpg', 
      alt: '"Um miau massageia o coração."',
      title: '- Stuart McMillan',
    },
    { 
      source: '../../../assets/carousel/s5.png', 
      alt: '"Não importa que sejam poucas as suas posses e o seu dinheiro. Ter um cão torna-o rico."' ,
      title: '- Louis Sabin',
    },
    { 
      source: '../../../assets/carousel/s6.jpg', 
      alt: '"Só os meus cães nunca me trairão."' ,
      title: '- Maria Callas',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
