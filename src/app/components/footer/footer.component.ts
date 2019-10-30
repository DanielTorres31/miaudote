import { Component, OnInit } from '@angular/core';
import { isMobile } from '../../utils/screen-utils';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  constructor() { }
    items = [
      {id:'social-in', icon: 'fa fa-instagram fa-3x social', url: 'https://www.instagram.com/miaudote.newton/'},
    ];

  ngOnInit() {

  }

  defineClassFooter() {
    return isMobile() ? "footerMobile" : "footer";
  }


}
