import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SaveButton } from '../../models/save-button.interface';

@Component({
  selector: 'ibdc-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent implements OnInit {
  @Input() options: SaveButton;
  @Output() click = new EventEmitter<string>();
  @ViewChild("saveButton") saveButton: any;
  move = false;
  keyPressed = false;
  constructor() { }

  ngOnInit(): void {
    document.querySelector('.card-container').addEventListener('keypress', () => {
      this.keyPressed = true;
    })

    if (this.options.readOnlyVariable === undefined) {
      this.options.readOnlyVariable = false;
    }

    if (this.options.remember && this.options.minutesToRemember) {
      setInterval(() => {
        if (!this.keyPressed) return;
        this.move = true;
        setTimeout(() => {
          this.move = false;
        }, 3000);


      }, 10000 * this.options.minutesToRemember);
    }

  }

  onclick() {
    this.click.emit();
  }

}
