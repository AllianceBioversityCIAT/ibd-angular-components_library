import { Component, Input, OnInit } from '@angular/core';
import { LinkListOptions } from '../../models/link-list-options.interface';
interface LinkList {
  link: string;
  description: string;
}
@Component({
  selector: 'ibdc-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {

  @Input() options:LinkListOptions;

  constructor() { }

  ngOnInit(): void {
  }
  
  removeLink(index,object,itemLink:HTMLElement){
    itemLink.classList.remove('animate__animated', 'animate__fadeInRight', 'animate__faster');
    itemLink.classList.add('animate__animated', 'animate__bounceOutLeft');
    itemLink.addEventListener('animationend', () => {
      this.options.savedList.list.splice(index,1);
      console.log(object);
    });
  }

  addLink(){
    // let item={};
    let item = new Object();
    item[this.options.savedList.attributeDescription] = "";
    item[this.options.savedList.attributeLink] = "";
    this.options.savedList.list.push(item);
    console.log(this.options.savedList.list);
  }

}
