import { Component, Input, OnInit } from '@angular/core';
import { AlertOptions } from '../../models/alert-options.interface';

@Component({
  selector: 'ibdc-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() options:AlertOptions;
  constructor() { }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-color-1', '#fff');
  }

  typeToIcon(type) {
    switch (type) {
      case 'warning':
        return 'warning';

      case 'danger':
        return 'dangerous';

      case 'alert':
        return 'priority_high';

      case 'info':
        return 'info';

      // default:
      //   break;
    }
  }

}
