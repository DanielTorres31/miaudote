import { Component, OnInit, Input } from '@angular/core';
import { Header } from './shared/header.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() list: any[];
  @Input() headers: Header[];

  constructor() { }

  ngOnInit() { }

}
