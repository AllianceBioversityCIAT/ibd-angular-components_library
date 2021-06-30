import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SaveButton } from '../../models/save-button.interface';

@Component({
  selector: 'ibdc-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent implements OnInit {
  @Input() options: SaveButton;
  @Output() click = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    if (this.options.readOnlyVariable === undefined) {
      this.options.readOnlyVariable = false;
    }
  }

  onclick(){
    this.click.emit();
  }

}
