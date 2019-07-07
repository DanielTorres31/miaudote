import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    console.log('ngOnInit')
   this.httpClient.get('/api/Instituicao.php', {
     params: {
       acao: 'GetInstituicao'
     }
   }).subscribe((resp: any) => {
     console.log(resp.data);
   })
  }

}
