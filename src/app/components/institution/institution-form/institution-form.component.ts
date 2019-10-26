import { InstitutionUtils } from './../shared/institution-utils';
import { MessageUtils } from 'src/app/utils/message-utils';
import { MessageService } from 'primeng/api';
import { Institution } from './../shared/institution.model';
import { InstitutionService } from './../shared/institution.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
      this.messageService.add(MessageUtils.createSuccessMessage('Instituição criada com sucesso!'));
      this.closeForm();
    }, () => this.messageService.add(MessageUtils.createErrorMessage('Erro ao criar instituição.')));
  }

  updateInstitution(institution: Institution) {
    this.institutionService.update(institution).subscribe((response: any) => {
      this.messageService.add(MessageUtils.createSuccessMessage('Instituição alterada com sucesso!'));
      this.closeForm();
    }, () => this.messageService.add(MessageUtils.createErrorMessage('Erro ao alterar instituição.')));
  }

  deleteInstitution() {
    this.institutionService.delete(this.institution.COD_INSTITUICAO).subscribe((response: any) => {
      this.messageService.add(MessageUtils.createSuccessMessage('Instituição excluída com sucesso!'));
      this.closeForm();
    }, () => this.messageService.add(MessageUtils.createErrorMessage('Erro ao excluir instituição.')));
  }

  validateInstitution(institution: Institution) {
    let error = false;

    if (institution.IND_TIPO_INSTITUICAO != InstitutionUtils.IND_TYPE_ONG &&
      institution.IND_TIPO_INSTITUICAO != InstitutionUtils.IND_TYPE_PROTETOR) {
      this.messageService.add(MessageUtils.createErrorMessage('Selecione o tipo da instituição.'));
      error = true;
    }
    if (!institution.DES_EMAIL) {
      this.messageService.add(MessageUtils.createErrorMessage('Preencha o email da instituição.'));
      error = true;
    }
    if (!institution.NOM_INSTITUICAO) {
      this.messageService.add(MessageUtils.createErrorMessage('Preencha o nome da instituição.'));
      error = true;
    }
    if (!institution.NUM_TELEFONE) {
      this.messageService.add(MessageUtils.createErrorMessage('Preencha o telefone da instituição.'));
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
