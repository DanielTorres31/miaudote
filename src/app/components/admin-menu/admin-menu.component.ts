import { AuthService } from './../login/shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  items = [
    { label: 'Animais', icon: 'fa fa-paw', route: 'animal' },
    { label: 'Instituições', icon: 'fa fa-university', route: 'instituicao' },
    { label: 'Usuários', icon: 'fa fa-user', route: 'usuario' },
  ]

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  navigate(route) {
    this.router.navigate([route]);
  }

  logout() {
    this.authService.logout().subscribe((response: any) => {
      if(response.sucesso) {
        this.authService.closeSession();
      }
    });
  }

}
