import { Institution } from './institution.model';

export class InstitutionUtils {

    public static IND_TYPE_ONG = 'O';
    public static TYPE_ONG = 'ONG';

    public static IND_TYPE_PROTETOR = 'P';
    public static TYPE_PROTETOR = 'Protetor';

    public static getInstitutionType(indType) {

        switch(indType) {
            case this.IND_TYPE_ONG:
                return this.TYPE_ONG;
            
            case this.IND_TYPE_PROTETOR:
                return this.TYPE_PROTETOR;

            default:
                return '-';
        }
    }

    public static getIndInstitutionType(type) {

        switch(type) {
            case this.TYPE_ONG:
                return this.IND_TYPE_ONG;
            
            case this.TYPE_PROTETOR:
                return this.IND_TYPE_PROTETOR;

            default:
                return '-';
        }
    }

    public static enrichmentInstitution(list: Institution[]) {
        list.map(institution => {
            institution.IND_TIPO_INSTITUICAO = this.getInstitutionType(institution.IND_TIPO_INSTITUICAO);
        });

        return list;
    }
    
}