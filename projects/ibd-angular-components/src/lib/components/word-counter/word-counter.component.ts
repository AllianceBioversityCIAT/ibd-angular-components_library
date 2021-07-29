import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ibdc-word-counter',
  templateUrl: './word-counter.component.html',
  styleUrls: ['./word-counter.component.scss']
})
export class WordCounterComponent implements OnInit {
  wordCount: any;
  words: any;
  @Input() form:FormGroup;
  @Input() formControlNameInput:string;
  @Input() maxWords:any;
  constructor() { }

  ngOnInit(): void {
    this.wordCounter();
    this.form.get(this.formControlNameInput).valueChanges.subscribe(resp=>{
      this.wordCounter();
    })
  }

  wordCounter() {
    this.wordCount = this.form.get(this.formControlNameInput).value ? this.form.get(this.formControlNameInput).value.split(/\s+/) : 0;
    this.words = this.wordCount ? (this.wordCount[this.wordCount.length-1]=="" ? this.wordCount.length-1 : this.wordCount.length ) : 0;
    // console.log(this.words);
  }

  // this.textareaInput = new FormControl(this.options.form.value[this.options.formControlName]?this.options.form.value[this.options.formControlName]:'', [
  //   Validators.required,
  //   this.options.maxWords ? this.maxWordsValidator(): Validators.required
  // ]);


//   maxWordsValidator(): ValidatorFn {  
//     return  (control: AbstractControl): { [key: string]: any } | null => this.words < this.options.maxWords ? null:{maxWords: control.value};
// }

}
