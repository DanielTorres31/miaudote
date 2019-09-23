import { Component, OnInit } from '@angular/core';
import { isMobile } from '../../utils/screen-utils';
import { SideFilter } from './shared/side-filter.model';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.scss']
})
export class SideFilterComponent implements OnInit {

  isMobileButtonVisible: boolean = true;
  
  header = 'Filtros';

  especieOptions = [
    {label: 'Todos', value: 'Todos'},
    {label: 'Cão', value: 'Cão'},
    {label: 'Gato', value: 'Gato'},
  ]

  porteOptions = [
    {label: 'Todos', value: 'Todos'},
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

  filter: SideFilter = new SideFilter();

  constructor() { }

  ngOnInit() {
  }

  defineFilterClass() {
    if(isMobile()) {
      this.enableMobileButton();
      return 'collapse'
    }
    this.disableMobileButton()
    return '';
  }

  applyFilter() {
    console.log(this.filter);
  }

  especieChanged(valueChanged: any) {
    this.filter.especie = valueChanged.value;
  }

  sexoChanged(valueChanged: any) {
    this.filter.sexo = valueChanged.value;
  }

  porteChanged(valueChanged: any) {
    this.filter.porte = valueChanged.value;
  }

  idadeChanged(valueChanged: any) {
    this.filter.idade = valueChanged;
  }

  enableMobileButton() {
    this.isMobileButtonVisible = true;
  }

  disableMobileButton() {
    this.isMobileButtonVisible = false;
  }

}
