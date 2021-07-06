import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../../../shared/services/test.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  public exampleForm: FormGroup;
  linkTest =[
    {
      link:'asas',
      description:'asas'
    }
  ]
  constructor(
    public _testService: TestService
  ) {
    this.exampleForm = new FormGroup({
      text: new FormControl('Hello world', Validators.required),
    });
   }

  ngOnInit(): void {
  }

  hello(){
    console.log("hello");
  }

}
