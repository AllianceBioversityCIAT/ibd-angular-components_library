import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';

import { textareaOptions } from '../../models/textarea-options.interface';
@Component({
  selector: 'ibdc-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() options:textareaOptions;
  textareaInput:FormControl;
  @ViewChild("textAreaValue") txtArea:ElementRef;
  constructor() { }

  ngOnInit(): void {
    let options={
      plugins:[]
    };
    this.textareaInput = new FormControl(this.options.form.value[this.options.formControlName]?this.options.form.value[this.options.formControlName]:'', [
      Validators.required,
      // this.options.maxWords ? this.maxWordsValidator(): Validators.required
    ]);

     this.setValue();
  }

  deleteLastWord(){
    // let text = this.options.form.get(this.options.formControlName).value;
    // console.log(text);
    // let lastIndex = text.lastIndexOf(" ");
    // text = text.substring(0, lastIndex);
    // console.log(text);
    // this.txtArea.nativeElement.value = text;
    // this.options.form.controls[this.options.formControlName].setValue(text);
    // // console.log("writing");
  }


  setValue(){
    this.options.form.controls[this.options.formControlName].setValue(this.textareaInput.value);
  }


  ngOnDestroy(): void {
   
  }

}
