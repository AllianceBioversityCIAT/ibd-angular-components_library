import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../../../shared/services/test.service';
import { RequestService } from '../../../shared/services/request.service';

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

  toDisableList=[
    {
      name:"test 1",
      id:1
    },
    {
      name:"test 2",
      id:2
    },
    {
      name:"test 3",
      id:3
    }
  ]

  selectList=[
    {
      name:"test 1",
      id:1
    },
    {
      name:"test 2",
      id:2
    },
    {
      name:"test 3",
      id:3
    }
  ]
  usersExample = [];
  constructor(
    public _testService: TestService,
    public _requestService:RequestService
  ) {
    this.exampleForm = new FormGroup({
      text: new FormControl('Hello world', Validators.required),
      select: new FormControl(1, Validators.required),
      selectWithValue: new FormControl('7', Validators.required),
    });
   }

  ngOnInit(): void {
    this.exampleForm.valueChanges.subscribe(resp=>{
      // console.log(resp);
    })
  }

  hello(){
    console.log("hello");
  }

}
