export interface SelectMultipleOptions{
    required?:boolean;
    readOnlyVariable?:boolean
    inputTitle:string;
    description?:string;
    hideSavedList:boolean;
    // form:FormGroup;
    chipName:string;
    // maxWords:number;
    savedList:{
        list:any[];
        selectItemId:string|number;
        selectItemName:string;
        idToSave:string|number;
        labelName:string;
    };
    selectList:any[];
    selectItemName:string;
    selectItemId:string|number;
    
    toDisableList:[];
    showChips:boolean;
    attributeNameToSearch:string;
    initialSearchText:string;
    frontendSearchAttribute:string
    service:{
        serviceTS:any;
        functionName:string;
        objectName:[];
    }
    
    
}