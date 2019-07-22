import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(private router: Router) { }

  items = [
    {label: 'INÍCIO', route: ''},
    {label: 'QUEM SOMOS', route: 'quemsomos'},
    {label: 'COMO ADOTAR', route: 'comoadotar'},
    {label: 'LOGIN', route: 'login'},
  ]

  ngOnInit() {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
