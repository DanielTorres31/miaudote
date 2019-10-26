import { InstitutionUtils } from './../shared/institution-utils';
import { MessageUtils } from 'src/app/utils/message-utils';
import { MessageService } from 'primeng/api';
import { Institution } from './../shared/institution.model';
import { InstitutionService } from './../shared/institution.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Messages } from 'src/app/utils/messages';
import { ApiResponseUtils } from 'src/app/utils/api-response-utils';

@Component({
  selector: 'app-institution-form',
  templateUrl: './institution-form.component.html',
  styleUrls: ['./institution-form.component.scss']
})
export class InstitutionFormComponent implements OnInit {

  title: string = '';

  institution: Institution = new Institution();

  institutionTypes = InstitutionUtils.institutionTypes;

  constructor(private router: Router, private route: ActivatedRoute, private institutionService: InstitutionService,
    private messageService: MessageService, private apiUtils: ApiResponseUtils) { }

  ngOnInit() {
    this.validatesFormIsEditable();
  }

  validatesFormIsEditable() {
    this.route.params.subscribe(param => {
      if (param['id']) {
        this.titleEditInstitution();
        this.institutionService.findById(param['id']).subscribe((response: any) => {
          this.institution = response.data;
        });
      } else {
        this.titleNewInstitution();
      }
    });
  }

  saveInstitution() {
    if (!this.institution.COD_INSTITUICAO) {
      this.createNewInstitution(this.institution);
    } else {
      this.updateInstitution(this.institution);
    }
  }

  createNewInstitution(institution: Institution) {
    this.institutionService.create(institution).subscribe((response: any) => {
      this.messageService.add(MessageUtils.createSuccessMessage(Messages.INSTITUICAO_CADASTRO_SUCESSO));
      this.closeForm();
    }, (response) => this.apiUtils.validatesResponseError(response, Messages.INSTITUICAO_CADASTRO_ERRO) );
  }

  updateInstitution(institution: Institution) {
    this.institutionService.update(institution).subscribe((response: any) => {
      this.messageService.add(MessageUtils.createSuccessMessage(Messages.INSTITUICAO_ALTERACAO_SUCESSO));
      this.closeForm();
    }, (response) => this.apiUtils.validatesResponseError(response, Messages.INSTITUICAO_ALTERACAO_ERRO) );
  }

  deleteInstitution() {
    this.institutionService.delete(this.institution.COD_INSTITUICAO).subscribe((response: any) => {
      this.messageService.add(MessageUtils.createSuccessMessage(Messages.INSTITUICAO_EXCLUSAO_SUCESSO));
      this.closeForm();
    }, () => this.messageService.add(MessageUtils.createErrorMessage(Messages.INSTITUICAO_EXCLUSAO_ERRO)));
  }

  closeForm() {
    this.router.navigate(['instituicao']);
  }

  titleNewInstitution() {
    this.title = 'Nova Instituição';
  }

  titleEditInstitution() {
    this.title = 'Edição Instituição';
  }

}
