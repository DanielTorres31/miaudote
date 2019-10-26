import { InstitutionUtils } from './../shared/institution-utils';
import { MessageUtils } from 'src/app/utils/message-utils';
import { MessageService } from 'primeng/api';
import { Institution } from './../shared/institution.model';
import { InstitutionService } from './../shared/institution.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Messages } from 'src/app/utils/messages';

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
    private messageService: MessageService) { }

  ngOnInit() {
    this.validatesFormIsEditable();
  }

  saveInstitution() {
    const validationError = this.validateInstitution(this.institution);
    if (validationError) {
      return;
    }

    if (!this.institution.COD_INSTITUICAO) {
      this.createNewInstitution(this.institution);
    } else {
      this.updateInstitution(this.institution);
    }
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

  createNewInstitution(institution: Institution) {
    this.institutionService.create(institution).subscribe((response: any) => {
      this.messageService.add(MessageUtils.createSuccessMessage(Messages.INSTITUICAO_CADASTRO_SUCESSO));
      this.closeForm();
    }, () => this.messageService.add(MessageUtils.createErrorMessage(Messages.INSTITUICAO_CADASTRO_ERRO)));
  }

  updateInstitution(institution: Institution) {
    this.institutionService.update(institution).subscribe((response: any) => {
      this.messageService.add(MessageUtils.createSuccessMessage(Messages.INSTITUICAO_ALTERACAO_SUCESSO));
      this.closeForm();
    }, () => this.messageService.add(MessageUtils.createErrorMessage(Messages.INSTITUICAO_ALTERACAO_ERRO)));
  }

  deleteInstitution() {
    this.institutionService.delete(this.institution.COD_INSTITUICAO).subscribe((response: any) => {
      this.messageService.add(MessageUtils.createSuccessMessage(Messages.INSTITUICAO_EXCLUSAO_SUCESSO));
      this.closeForm();
    }, () => this.messageService.add(MessageUtils.createErrorMessage(Messages.INSTITUICAO_EXCLUSAO_ERRO)));
  }

  validateInstitution(institution: Institution) {
    let error = false;

    if (institution.IND_TIPO_INSTITUICAO != InstitutionUtils.IND_TYPE_ONG &&
      institution.IND_TIPO_INSTITUICAO != InstitutionUtils.IND_TYPE_PROTETOR) {
      this.messageService.add(MessageUtils.createErrorMessage(Messages.INSTITUICAO_VALIDACAO_TIPO));
      error = true;
    }
    if (!institution.DES_EMAIL) {
      this.messageService.add(MessageUtils.createErrorMessage(Messages.INSTITUICAO_VALIDACAO_EMAIL));
      error = true;
    }
    if (!institution.NOM_INSTITUICAO) {
      this.messageService.add(MessageUtils.createErrorMessage(Messages.INSTITUICAO_VALIDACAO_NOME));
      error = true;
    }
    if (!institution.NUM_TELEFONE) {
      this.messageService.add(MessageUtils.createErrorMessage(Messages.INSTITUICAO_VALIDACAO_TELEFONE));
      error = true;
    }
    return error;
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
