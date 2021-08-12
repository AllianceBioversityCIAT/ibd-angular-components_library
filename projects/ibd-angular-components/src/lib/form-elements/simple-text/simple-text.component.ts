import { Component, Input, OnInit } from '@angular/core';
import { textOptions } from '../../models/text-options.interface';

@Component({
  selector: 'ibdc-simple-text',
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.scss']
})
export class SimpleTextComponent implements OnInit {
  @Input() options:textOptions;
  constructor() { }

  ngOnInit(): void {
  }

}
