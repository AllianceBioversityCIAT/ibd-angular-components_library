import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() writeEvent = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
    this.wordCounter();
    this.form.get(this.formControlNameInput).valueChanges.subscribe(resp=>{
      this.wordCounter();
    })
  }

  wordCounter() {
    let textTocount = this.form.get(this.formControlNameInput).value;
    if (textTocount) {
      let textReplaced = textTocount.replace(/(<(\/?p)>)/gi,' ').replace(/(<([^>]+)>)/gi,'');
      console.log(textReplaced);
      if (textReplaced) {
        let textMatch =textReplaced.match(/\S+/g)
        if (textMatch) {
          this.words = textMatch.length;
        }else{
          this.words = 0;
        }
        
        if (this.words > this.maxWords) {
          this.writeEvent.emit();
        }
      }else{
        this.words = 0;
      }

    }else{
      this.words = 0;
    }


  }



}
