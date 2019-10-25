import { Animal } from './animal.model';


export class AnimalUtils {

    public static IND_TYPE_SEXO_MASCULINO = 'M';
    public static TYPE_MASCULINO = 'MASCULINO';

    public static IND_TYPE_SEXO_FEMININO = 'F';
    public static TYPE_FEMININO = 'FEMININO';

    public static getAnimalType(indType) {

        switch(indType) {
            case this.IND_TYPE_SEXO_MASCULINO:
                return this.TYPE_MASCULINO;
            
            case this.IND_TYPE_SEXO_FEMININO:
                return this.TYPE_FEMININO;

            default:
                return '-';
        }
    }

    public static getIndAnimalType(type) {

        switch(type) {
            case this.TYPE_MASCULINO:
                return this.IND_TYPE_SEXO_MASCULINO;
            
            case this.TYPE_FEMININO:
                return this.IND_TYPE_SEXO_FEMININO;

            default:
                return '-';
        }
    }

    public static enrichmentAnimal(list: Animal[]) {
        list.map(animal => {
            animal.IND_SEXO_ANIMAL = this.getAnimalType(animal.IND_SEXO_ANIMAL);
        });

        return list;
    }
    
}