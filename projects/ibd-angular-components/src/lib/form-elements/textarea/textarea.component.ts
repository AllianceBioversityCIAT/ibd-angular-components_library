import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';


import { textareaOptions } from '../../models/textarea-options.interface';
declare var $:any;
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
    this.textareaInput = new FormControl(this.options.form.value[this.options.formControlName]?this.options.form.value[this.options.formControlName]:'');

     this.setValue();
  }

  ngAfterViewInit(): void {

    // $('.ql-editor').bind('paste', (e) => {
    //   var data = e.originalEvent.clipboardData.getData('Text');
    //   this.clipboard.copy(data.replace(/(<(\/?p)>)|(&nbsp;)/gi, ' ').replace(/(<([^>]+)>)/gi, ''));
    // });

  }

  setValue(){
    this.options.form.controls[this.options.formControlName].setValue(this.textareaInput.value);
  }


}
