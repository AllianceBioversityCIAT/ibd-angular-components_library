import { Component } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ibd-angular-library';
  linkTest =[
    {
      link:'asas',
      description:'asas'
    }
  ]
  constructor( 
    public _testService: TestService
  ){
  }
}
