import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  constructor() { }
    items = [
      {id:'social-fb', icon: 'fa fa-facebook fa-3x social', url: 'https://www.facebook.com'},
      {id:'social-tw', icon: 'fa fa-twitter fa-3x social', url: '#'},
      {id:'social-in', icon: 'fa fa-instagram fa-3x social', url: 'https://www.instagram.com/miaudote.newton/'},
      {id:'social-gp', icon: 'fa fa-google-plus fa-3x social', url: '#'},
      {id:'social-em', icon: 'fa fa-envelope fa-3x social', url: '#'}
    ];

  ngOnInit() {

  }

  defineClasseFooter() {
    return window.innerWidth < 900 ? "footer-mobile" : "footer";
  }


}
