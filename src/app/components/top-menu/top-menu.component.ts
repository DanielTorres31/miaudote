import { isMobile } from 'src/app/utils/screen-utils';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  constructor(private router: Router) { }

  isCollapsed: boolean = false;
  isMobileButtonVisible: boolean = false;

  items = [
    {label: 'INÍCIO', route: ''},
    {label: 'QUEM SOMOS', route: 'quemsomos'},
    {label: 'COMO ADOTAR', route: 'comoadotar'},
    {label: 'LOGIN', route: 'login'},
  ]

  ngOnInit() {
    if(isMobile()) {
      this.isCollapsed = true;
      this.isMobileButtonVisible = true;
    } else {
      this.isCollapsed = false;
      this.isMobileButtonVisible = false;
    }
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
