import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

export interface selectOptions{
    required?:boolean;
    readOnlyVariable?:boolean
    inputTitle:string;
    description?:string;
    form:FormGroup;
    formControlName:string;
    formControlId:string;
    maxWords:number;
    selectList:[];
    selectItemName:string;
    selectItemId:string|number;
    toDisableList:[];
    // attributeNameToSearch:string;
    // serviceFunction:string;
    initialSearchText:string;
    frontendSearchAttribute:string
    service:{
        serviceTS:any;
        functionName:string;
        objectName:[];
    }
}