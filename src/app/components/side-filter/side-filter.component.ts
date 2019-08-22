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

  states = [
    {label: 'Minas Gerais', value: 'Minas Gerais'},
    {label: 'São Paulo', value: 'São Paulo'},
    {label: 'Rio de Janeiro', value: 'Rio de Janeiro'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
