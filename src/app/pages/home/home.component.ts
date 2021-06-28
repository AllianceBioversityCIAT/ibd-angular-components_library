import { Component, OnInit } from '@angular/core';
import { TestService } from '../../shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  linkTest =[
    {
      link:'asas',
      description:'asas'
    }
  ]
  ngOnInit(){
    
  }
  constructor( 
    public _testService: TestService
  ){
  }

}
