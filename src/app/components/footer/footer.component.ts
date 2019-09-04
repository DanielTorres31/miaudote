import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  constructor() { }
    items = [
      {icon: 'fa fa-facebook', url: 'https://www.facebook.com/'},
      {icon: 'fa fa-twitter', url: '#'},
      {icon: 'fa fa-instagram', url: '#'},
      {icon: 'fa fa-google-plus', url: '#'},
      {icon: 'fa fa-envelope', url: '#'}
    ];

  ngOnInit() {
  }

  defineFooter(){
    if(window.innerWidth < 900){
      return "footerMobile"
    }else
      return "footer"
  }
}
