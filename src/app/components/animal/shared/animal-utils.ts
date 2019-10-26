import { Animal } from './animal.model';


export class AnimalUtils {

    public static IND_TYPE_SEXO_MASCULINO = 'M';
    public static TYPE_MASCULINO = 'Macho';
    public static IND_TYPE_SEXO_FEMININO = 'F';
    public static TYPE_FEMININO = 'Fêmea';
    public static IND_TYPE_IDADE_FILHOTE = '1';
    public static TYPE_FILHOTE = 'Filhote';
    public static IND_TYPE_IDADE_ADULTO = '2';
    public static TYPE_ADULTO = 'Adulto';
    public static IND_TYPE_IDADE_IDOSO = '3';
    public static TYPE_IDOSO = 'Idoso';
    public static IND_TYPE_CASTRADO_NAO = 'F';
    public static TYPE_CASTRADO_NAO = 'Não';
    public static IND_TYPE_CASTRADO_SIM = 'T';
    public static TYPE_CASTRADO_SIM = 'Sim';
    public static IND_TYPE_PORTE_P = '1';
    public static TYPE_PORTE_P = 'Pequeno';
    public static IND_TYPE_PORTE_M = '2';
    public static TYPE_PORTE_M = 'Médio';
    public static IND_TYPE_PORTE_G = '3';
    public static TYPE_PORTE_G = 'Grande';

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
            
            case this.IND_TYPE_IDADE_FILHOTE:
                return this.TYPE_FILHOTE;

            case this.IND_TYPE_IDADE_ADULTO:
                return this.TYPE_ADULTO;                

            case this.IND_TYPE_IDADE_IDOSO:
                return this.TYPE_IDOSO;

            case this.IND_TYPE_CASTRADO_NAO:
                return this.TYPE_CASTRADO_NAO;                

            case this.IND_TYPE_CASTRADO_SIM:
                return this.TYPE_CASTRADO_SIM; 

            case this.IND_TYPE_PORTE_P:
                return this.TYPE_PORTE_P;

            case this.IND_TYPE_PORTE_M:
                return this.TYPE_PORTE_M;                

            case this.IND_TYPE_PORTE_G:
                return this.TYPE_PORTE_G; 

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

            case this.TYPE_FILHOTE:
                return this.IND_TYPE_IDADE_FILHOTE;

            case this.TYPE_ADULTO:
                return this.IND_TYPE_IDADE_ADULTO;                

            case this.TYPE_IDOSO:
                return this.IND_TYPE_IDADE_IDOSO;

            case this.TYPE_CASTRADO_NAO:
                return this.IND_TYPE_CASTRADO_NAO;                

            case this.TYPE_CASTRADO_SIM:
                return this.IND_TYPE_CASTRADO_SIM; 
                
            case this.TYPE_PORTE_P:
                return this.IND_TYPE_PORTE_P;

            case this.TYPE_PORTE_M:
                return this.IND_TYPE_PORTE_M;                

            case this.TYPE_PORTE_G:
                return this.IND_TYPE_PORTE_G;                 

            default:
                return '-';
        }
    }

    public static enrichmentAnimal(animal: Animal) {
            animal.IND_SEXO_ANIMAL = this.getAnimalType(animal.IND_SEXO_ANIMAL);
            animal.IND_IDADE = this.getAnimalType(animal.IND_IDADE);
            animal.IND_CASTRADO = this.getAnimalType(animal.IND_CASTRADO);
            animal.IND_PORTE_ANIMAL = this.getAnimalType(animal.IND_PORTE_ANIMAL);
        return animal;
    }
    
}