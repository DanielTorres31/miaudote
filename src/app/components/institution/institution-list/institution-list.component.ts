import { InstitutionService } from './../shared/institution.service';
import { Component, OnInit } from '@angular/core';
import { Institution } from '../shared/institution.model';
import { Header } from 'src/app/html-components/table/shared/header.model';

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.scss']
})
export class InstitutionListComponent implements OnInit {

  title = 'Instituições';

  institutions: Institution[];

  headers: Header[] = [
    { label: 'Nome', value: 'NOM_INSTITUICAO' },
    { label: 'Telefone', value: 'NUM_TELEFONE' },
    { label: 'Tipo Instituição', value: 'IND_TIPO_INSTITUICAO' },
  ];

  constructor(private institutionService: InstitutionService) { }

  ngOnInit() {
    this.institutionService.findAll().subscribe((response: any) => {
      this.institutions = response.data;
    });
  }

}
