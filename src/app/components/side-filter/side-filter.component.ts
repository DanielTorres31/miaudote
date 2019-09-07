import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.scss']
})
export class SideFilterComponent implements OnInit {

  header = 'Filtros';

  especieOptions = [
    {label: 'Todos', value: 'Todos'},
    {label: 'Cão', value: 'Cão'},
    {label: 'Gato', value: 'Gato'},
  ]

  porteOptions = [
    {label: 'Pequeno', value: 'Pequeno'},
    {label: 'Médio', value: 'Médio'},
    {label: 'Grande', value: 'Grande'},
  ]

  sexoOptions = [
    {label: 'Todos', value: 'Todos'},
    {label: 'Macho', value: 'Macho'},
    {label: 'Fêmea', value: 'Fêmea'},
  ]

  idadeOptions = [
    {label: 'Até 1 ano (Filhote)', value: 'Até 1 ano (Filhote)'},
    {label: '1 a 8 anos (Adulto)', value: '1 a 8 anos (Adulto)'},
    {label: 'Acima de 8 anos (Idoso)', value: 'Acima de 8 anos (Idoso)'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
