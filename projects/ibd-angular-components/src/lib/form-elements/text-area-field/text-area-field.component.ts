import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ibdc-text-area-field',
  templateUrl: './text-area-field.component.html',
  styleUrls: ['./text-area-field.component.scss']
})
export class TextAreaFieldComponent implements OnInit {
  @Input() inputTitle;
  @Input() inputDescription;
  @Input() inputRequired;
  @Input() objectItem;
  @Input() objectAtributteName;
  @Input() readOnlyVariable;
  @Input() rows;
  @Input() initialParagraphs;
  constructor() { }

  ngOnInit(): void {
  }

}
