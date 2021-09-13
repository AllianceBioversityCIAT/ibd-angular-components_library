import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InputNgModelOptions } from '../../models/input-ngmodel-options.interface';

@Component({
  selector: 'ibdc-input-ngmodel',
  templateUrl: './input-ngmodel.component.html',
  styleUrls: ['./input-ngmodel.component.scss']
})
export class InputNgmodelComponent implements OnInit {
  @Input() options:InputNgModelOptions;
  numericField=0;
  constructor() { }

  ngOnInit(): void {
    let options={
      plugins:[]
    };

    this.numericField = this.options.item[this.options.itemName]?this.options.item[this.options.itemName]:0;
  }

}
