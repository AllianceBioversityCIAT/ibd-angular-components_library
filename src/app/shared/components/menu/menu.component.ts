import { Component, OnInit } from '@angular/core';
import { DataControlService } from '../../services/data-control.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public _dataControl:DataControlService
  ) { }

  ngOnInit(): void {
  }

}
