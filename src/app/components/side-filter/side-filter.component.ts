import { AnimalUtils } from './../animal/shared/animal-utils';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
    {label: 'Todos', value: ''},
    ...AnimalUtils.especie
  ]

  porteOptions = [
    {label: 'Todos', value: ''},
    ...AnimalUtils.porte
  ]

  sexoOptions = [
    {label: 'Todos', value: ''},
    ...AnimalUtils.sexo
  ]

  idadeOptions = AnimalUtils.idade;

  filter: SideFilter = new SideFilter('', '', '', '', '');

  @Output() selectedFilter = new EventEmitter();

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
    this.selectedFilter.emit({
      filter: this.filter
    });
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
