import { FormGroup } from "@angular/forms";

export interface textareaOptions{
    required?:boolean
    readOnlyVariable?:boolean
    inputTitle:string
    description?:string
    form:FormGroup;
    formControlName:string;
    maxWords?:number;
    editText?:boolean;
    initialParagraphs?:number;
}