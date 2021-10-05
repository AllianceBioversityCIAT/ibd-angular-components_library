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
      itemLink.style.maxHeight = '0px';
      if (object.citationId) {
        object.edited = true;
        object.active = false;
        setTimeout(() => {
          itemLink.style.display = 'none';
        }, 300);
      }else{
        setTimeout(() => {
          this.options.savedList.list.splice(index,1);
        }, 300);
     
      }
      
      console.log(this.options.savedList.list);
    });
  }

  addAttributeEdited(index){
    this.options.savedList.list[index].edited = true;
  }

  validatewebPage(link:any){
    var expression = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!():,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    var regex = new RegExp(expression);
    if (link.match(regex)) {
      return '';
    }else{
      return 'ng-invalid ng-dirty';
    }
  }

  addLink(){
    // let item={};
    let item = new Object();
    item[this.options.savedList.attributeDescription] = "";
    item[this.options.savedList.attributeLink] = "";
    this.options.savedList.list.push(item);
    console.log(this.options.savedList.list);
  }

  goToLink(url: string){
    window.open("//"+url, "_blank");
  }

}
