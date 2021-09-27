

export interface selectNgModelOptions{
    required?:boolean;
    readOnlyVariable?:boolean
    inputTitle:string;
    description?:string;
    formControlId:string;
    maxWords:number;
    selectList:[];
    selectItemName:string;
    selectItemId:string|number;
    itemName:string;
    itemId:string;
    item:any;
    // attributeNameToSearch:string;
    // serviceFunction:string;
    initialSearchText:string;
    frontendSearchAttribute:string
    service:{
        serviceTS:any;
        functionName:string;
        objectName:[];
        functionfirstParam:any
    }
}