export class Animal {

    public constructor(
        public COD_ANIMAL?: Number,
        public NOM_ANIMAL?: string,
        public IND_IDADE?: Number,
        public IND_PORTE_ANIMAL?: Number,
        public IND_SEXO_ANIMAL?: string,
        public IND_CASTRADO?: boolean,
        public IND_ADOTADO?: boolean,
        public DAT_CADASTRO?: Date,
        public DAT_ADOCAO?: Date,
        public DES_OBSERVACAO?: string,
        public DES_VACINA?: string,
        public DES_TEMPERAMENTO?: string,
        public INSTITUICAO_COD_INSTITUICAO?: Number,
        public NOM_INSTITUICAO?: string,
        public ESPECIE_COD_ESPECIE?: Number,
        public DES_ESPECIE?: string,
        public NOM_FOTO?: string,
        public IND_FOTO_PRINCIPAL?: boolean,
        public TIP_FOTO?: string,
        public BIN_FOTO?: string,
    ) {}

}