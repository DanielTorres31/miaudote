import { ApiResponseUtils } from './../../../utils/api-response-utils';
import { MessageUtils } from 'src/app/utils/message-utils';
import { MessageService } from 'primeng/api';
import { InstitutionService } from './../../institution/shared/institution.service';
import { AnimalUtils } from './../shared/animal-utils';
import { AnimalService } from 'src/app/components/animal/shared/animal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../shared/animal.model';
import { Institution } from '../../institution/shared/institution.model';
import { Messages } from 'src/app/utils/messages';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent implements OnInit {

  title: string = '';

  animal: Animal = new Animal();

  especies = AnimalUtils.especie;
  idades = AnimalUtils.idade;
  portes = AnimalUtils.porte;
  sexos = AnimalUtils.sexo;
  castradoOptions = AnimalUtils.castrado;

  imageChangedEvent: any = null;
  imageBase64: string = null;

  institutions: Institution[] = new Array<Institution>();

  constructor(private router: Router, private route: ActivatedRoute,
    private animalService: AnimalService, private institutionService: InstitutionService,
    private messageService: MessageService, private apiUtils: ApiResponseUtils) { }

  ngOnInit() {
    this.validatesFormIsEditable();
    this.loadInstitutionOptions();
  }

  validatesFormIsEditable() {
    this.route.params.subscribe(param => {
      if (param['id']) {
        this.titleEditAnimal();
        this.animalService.findById(param['id'], true).subscribe((response: any) => {
          this.animal = response.data;
          this.imageBase64 = this.animal.BIN_FOTO;
        });
      } else {
        this.titleNewAnimal();
      }
    });
  }

  saveAnimal() {
    if (!this.animal.COD_ANIMAL) {
      this.createNewAnimal(this.animal);
    } else {
      this.updateAnimal(this.animal);
    }
  }

  createNewAnimal(animal: Animal) {
    this.animalService.create(animal).subscribe((response: any) => {
      this.messageService.add(MessageUtils.createSuccessMessage(Messages.ANIMAL_CADASTRO_SUCESSO));
      this.closeForm();
    }, (response) => this.apiUtils.validatesResponseError(response, Messages.ANIMAL_CADASTRO_ERRO));
  }

  updateAnimal(animal: Animal) {
    this.animalService.update(animal).subscribe((response: any) => {
      this.messageService.add(MessageUtils.createSuccessMessage(Messages.ANIMAL_ALTERACAO_SUCESSO));
      this.closeForm();
    }, (response) => this.apiUtils.validatesResponseError(response, Messages.ANIMAL_ALTERACAO_ERRO));
  }

  deleteAnimal() {
    this.animalService.delete(this.animal.COD_ANIMAL).subscribe((response: any) => {
      this.messageService.add(MessageUtils.createSuccessMessage(Messages.ANIMAL_EXCLUIDO_SUCESSO));
      this.closeForm();
    }, (response) => this.apiUtils.validatesResponseError(response, Messages.ANIMAL_EXCLUIDO_ERRO));
  }

  loadInstitutionOptions() {
    this.institutionService.findAll().subscribe((response: any) => {
      this.institutions = response.data;
    });
  }

  imageCropped(event) {
    this.animal.BIN_FOTO = event.base64;
  }

  closeForm() {
    this.router.navigate(['animal']);
  }

  titleNewAnimal() {
    this.title = 'Novo Animal';
  }

  titleEditAnimal() {
    this.title = 'Edição Animal';
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

}
