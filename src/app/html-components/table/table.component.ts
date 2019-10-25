import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Header } from './shared/header.model';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/public_api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() list: any[] = new Array<any>();
  @Input() headers: Header[];

  paginatedList: any[] = new Array<any>();

  itemsPerPage = 2;

  previousText = 'Anterior';
  nextText = 'Próximo';

  @Output() clickedElement = new EventEmitter();

  constructor() {}

  ngOnInit() { }

  ngOnChanges() {
    this.paginatedList = this.list.slice(0, this.itemsPerPage);
  }

  clickElement(element) {
    this.clickedElement.emit({ element: element });
  }

  pageChanged(event: PageChangedEvent) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.paginatedList = this.list.slice(startItem, endItem);
  }

}
