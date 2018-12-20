import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  
  styleUrls: ['./app.component.css'],
  template: `
  <app-menu-principal></app-menu-principal>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'Miaudote';
}
