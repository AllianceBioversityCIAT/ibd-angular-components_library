export interface UploadFiles{
    required?:boolean;
    readOnlyVariable?:boolean;
    // readonly?:boolean;
    inputTitle:string;
    description?:string;
    filesList:File[];
    filesSavedList:[];
    // form:FormGroup;
    // formControlName:string;
    // formControlId:string;
    // maxWords:number;
    // selectList:[];
    // selectItemName:string;
    // selectItemId:string|number;
    // toDisableList:[];
    // attributeNameToSearch:string;
    service:any;
    // serviceFunction:string;
    // initialSearchText:string;
}