import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InputOptions } from '../../models/input-options.interface';

@Component({
  selector: 'ibdc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() options:InputOptions;
  textInput:FormControl;
  constructor() { }

  ngOnInit(): void {
    let options={
      plugins:[]
    };
    this.textInput = new FormControl(this.options.form.value[this.options.formControlName]?this.options.form.value[this.options.formControlName]:'', [
      Validators.required,
      // this.options.maxWords ? this.maxWordsValidator(): Validators.required
    ]);

     this.setValue();
  }


  setValue(){
    this.options.form.controls[this.options.formControlName].setValue(this.textInput.value);
    console.log('cambiando');
  }

}
