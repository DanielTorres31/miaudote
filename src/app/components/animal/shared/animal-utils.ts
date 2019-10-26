import { Animal } from './animal.model';


export class AnimalUtils {

    public static IND_TYPE_SEXO_MASCULINO = 'M';
    public static TYPE_MASCULINO = 'MASCULINO';

    public static IND_TYPE_SEXO_FEMININO = 'F';
    public static TYPE_FEMININO = 'FEMININO';

    public static idade = [
        { label: 'Até 1 ano (Filhote)', value: '0' },
        { label: '1 a 8 anos (Adulto)', value: '1' },
        { label: 'Acima de 8 anos (Idoso)', value: '2' },
    ]

    public static especie = [
        { label: 'Cachorro', value: '1' },
        { label: 'Gato', value: '2' },
    ]

    public static porte = [
        { label: 'Pequeno', value: 'P' },
        { label: 'Médio', value: 'M' },
        { label: 'Grande', value: 'G' },
    ]

    public static sexo = [
        { label: 'Macho', value: 'M' },
        { label: 'Fêmea', value: 'F' },
    ]

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