import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  itensMenu: MenuItem[] = [
    {label: 'INÍCIO', routerLink: '/'},
    {label: 'QUEM SOMOS', routerLink: '/quem_somos'},
    {label: 'COMO ADOTAR', routerLink: '/como_adotar'},
    {label: 'LOGIN', routerLink: '/login'},
    {label: 'FALE CONOSCO', routerLink: '/fale_conosco'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
