import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ibdc-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() objectItem;
  @Input() objectAtributteName;
  constructor() { }

  ngOnInit(): void {
  }

}
