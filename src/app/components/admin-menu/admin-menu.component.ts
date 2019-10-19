import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  items = [
    { label: 'Animais', icon: 'fa fa-paw' },
    { label: 'Instituições', icon: 'fa fa-university' },
    { label: 'Usuários', icon: 'fa fa-user' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
