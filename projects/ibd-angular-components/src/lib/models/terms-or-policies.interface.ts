import { FormGroup } from "@angular/forms";

export interface TermsOrPolicies{
    required?:boolean
    readOnlyVariable?:boolean
    inputTitle:string
    description?:string
    form:FormGroup;
    formControlName:string;
    text:string;
}