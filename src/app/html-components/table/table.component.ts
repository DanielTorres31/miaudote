import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Header } from './shared/header.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() list: any[];
  @Input() headers: Header[];

  @Output() clickedElement = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  clickElement(element) {
    this.clickedElement.emit(element);
  }

}
