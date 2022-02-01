import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ibdc-word-counter-for-fields',
  templateUrl: './word-counter-for-fields.component.html',
  styleUrls: ['./word-counter-for-fields.component.scss']
})
export class WordCounterForFieldsComponent implements OnInit {
  @Input() objectItem;
  @Input() objectAtributteName;
  @Input() maxWords:number;
  // @Output() writeEvent = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  // this.objectItem[this.objectAtributteName]
  wordCounter(textTocount:string): number {
    let words = 0;
    if (textTocount) {
      let textReplaced = textTocount.replace(/(<(\/?p)>)|(&nbsp;)/gi, ' ').replace(/(<([^>]+)>)/gi, '');
      let splitWords = textReplaced.split(' ')
      if (splitWords.length) {
        words = 0;
        splitWords.map(item => {
          if (item === '' || item === '\n' || item === '\t') return;
          words++
        })
        return words;
        // if (this.words > this.maxWords) {
        //   this.writeEvent.emit();
        // }
      } else {
        return 0;
      }

    } else {
      return 0;
    }


  }


}
