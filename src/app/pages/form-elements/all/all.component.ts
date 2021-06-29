import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../shared/services/test.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  linkTest =[
    {
      link:'asas',
      description:'asas'
    }
  ]
  constructor(
    public _testService: TestService
  ) { }

  ngOnInit(): void {
  }

}
