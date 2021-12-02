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
  numericField=0;
  reloadInput =  true;
  constructor() { }

  ngOnInit(): void {
    let options={
      plugins:[]
    };
    this.textInput = new FormControl(this.options.form.value[this.options.formControlName]?this.options.form.value[this.options.formControlName]:'', [
      Validators.required,
      // this.options.maxWords ? this.maxWordsValidator(): Validators.required
    ]);
    this.numericField = this.options.form.value[this.options.formControlName]?this.options.form.value[this.options.formControlName]:0;
     this.setValue();
  }


  setValue(){
    this.options.form.controls[this.options.formControlName].setValue(this.textInput.value);
    // console.log(this.options.form.value);
    // console.log('cambiando');
  }

  setValueWithNumber(){
    this.options.form.controls[this.options.formControlName].setValue(this.numericField);
    if (this.options.min === 0 && (this.numericField < this.options.min)) {
      this.numericField = this.options.min;
      this.options.form.controls[this.options.formControlName].setValue(this.options.min);
      this.reloadInput = false;
      setTimeout(() => {
        this.reloadInput = true;
      }, 10);
    }

    if (this.options.max && (this.numericField > this.options.max)) {
      this.numericField = this.options.max;
      this.options.form.controls[this.options.formControlName].setValue(this.options.max);
      this.reloadInput = false;
      setTimeout(() => {
        this.reloadInput = true;
      }, 10);
    }

    if (this.numericField == null) {
      this.options.form.controls[this.options.formControlName].setValue(0);
      this.numericField = 0;
      this.reloadInput = false;
      setTimeout(() => {
        this.reloadInput = true;
      }, 10);
    }

  }

}
