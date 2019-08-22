export class Animal {

    public constructor(
        public COD_ANIMAL?: Number,
        public NOM_ANIMAL?: string,
        public IND_IDADE?: Number,
        public IND_PORTE_ANIMAL?: Number,
        public IND_SEXO_ANIMAL?: string,
        public IND_CASTRADO?: boolean,
        public DAT_CADASTRO?: Date,
        public DES_OBSERVACAO?: string,
        public DES_VACINA?: string,
        public DES_TEMPERAMENTO?: string,
        public NOM_INSTITUICAO?: string,
        public DES_ESPECIE?: string,
        public NOM_CIDADE?: string,
        public NOM_ESTADO?: string
    ) {}

}