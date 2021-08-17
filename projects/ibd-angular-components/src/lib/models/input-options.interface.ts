import { FormGroup } from "@angular/forms";

export interface InputOptions{
    readOnlyVariable?:boolean
    required?:boolean
    readonly?:boolean
    inputTitle:string
    description?:string
    form:FormGroup;
    formControlName:string;
    maxWords?:number;
    type:string;
}