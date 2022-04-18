import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ibdc-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() inputTitle = null;
  @Input() inputDescription;
  @Input() inputRequired;
  @Input() readOnlyVariable;
  @Input() inputType: 'number' | 'text' | 'currency' = 'text';
  @Input() objectItem;
  @Input() objectAtributteName;
  @Input() maxWords:number;
  constructor() { }

  ngOnInit(): void {
  }

  currencyInputChanged(value) {
    var num = value.replace(/[$,]/g, "");
    return Number(num);
  }

}
