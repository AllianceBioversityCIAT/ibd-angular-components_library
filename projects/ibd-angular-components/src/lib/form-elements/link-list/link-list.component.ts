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
  linkList: LinkList[] = []
  constructor() { }

  ngOnInit(): void {
    this.joinSavedListAndLocalList();
  }

  joinSavedListAndLocalList(){
    this.linkList = Object.assign(this.options.savedList)
  }

  addLink(){
    this.linkList.push({link:'',description:''});
  }

}
