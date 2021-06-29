import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataControlService {

  constructor() { }
  menuSections = [
    {
      name:'About',
      route:'about'
    },
    {
      name:'Getting Started',
      route:'getting-started'
    },
    {
      name:'Components',
      children:[
        {
          name:'save button',
          route:'save-button'
        },
        {
          name:'TextArea',
          route:'textarea'
        },
        {
          name:'All',
          route:'all'
        }
      ]
    }
  ]
  

}
