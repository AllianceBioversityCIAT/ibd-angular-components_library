import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataControlService {

  constructor() { }
  menuSections = [
    {
      name:'About',
    },
    {
      name:'Getting Started',
    },
    {
      name:'Components',
      children:[
        {
          name:'save button'
        },
        {
          name:'Select'
        },
        {
          name:'TextArea'
        }
      ]
    }
  ]
  

}
