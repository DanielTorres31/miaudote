
export class MessageUtils {

    public static createSuccessMessage(message: string, key?: string) {
        if(key) {
            return { ket: key, severity:'success', summary:'Sucesso!', detail: message };
        }
        return { severity:'success', summary:'Sucesso', detail: message };
    }

    public static createErrorMessage(message: string, key?: string) {
        if(key) {
            return { key: key, severity:'error', summary:'Erro!', detail: message };
        }
        return { severity:'error', summary:'Erro', detail: message };
    }
}