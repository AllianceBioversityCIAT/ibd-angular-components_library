import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { selectOptions } from '../../models/select-options.interface';
import { map } from 'rxjs/operators';
import { SelectMultipleOptions } from '../../models/select-multiple-interface';
@Component({
  selector: 'ibdc-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss']
})
export class SelectMultipleComponent implements OnInit {

 
  searchText = '';
  @Input() options:SelectMultipleOptions;
  selectList=[];

  fieldSelector= {
    class:'hide_field_selector',
    value:'244242424',
    name:''
  }


  // valors='asasasas';


 
  constructor() { }

  ngOnInit(): void {
    this.searchText = this.options.initialSearchText?this.options.initialSearchText:this.searchText;
    this.consumeService();
  }

  consumeService() {
    if (this.options.service && !this.options.selectList) {

      this.options.service.serviceTS[this.options.service.functionName]('todo').subscribe((res) => {
        this.selectList = res;
        // each key and sub keys to find the list
        if (this.options.service.objectName) this.options.service.objectName.map((objectName)=>this.selectList = this.selectList[objectName]);
        this.mapSavedList();
        // console.log(this.selectList);
      });
      
    }else{
      this.selectList = this.options.selectList;
      this.mapSavedList();
    }
  }

  mapSavedList(){
    // console.log(this.options.savedList.list);
    this.options.savedList.list.map(savedItem=>{
      // console.log(savedItem);
      let itemFinded = this.selectList.find(originalItem=>originalItem[this.options.selectItemId] == savedItem[this.options.savedList.selectItemId]);
      itemFinded?itemFinded.selected = true:null;
      // console.log(itemFinded);
    });
  }

  writtenInSearchField(){
    console.log("writtenInSearchField");
    // this.mapSelected();
  }

  toggle_field_selector_class(){
    this.fieldSelector.class =='show_field_selector'?this.fieldSelector.class ='hide_field_selector':this.fieldSelector.class ='show_field_selector'
  }

  onSelectOption(option:any){
    let itemFinded = this.options.savedList.list.find((savedItem:any)=>savedItem[this.options.savedList.selectItemId] == option[this.options.selectItemId]);
    let itemFindedIndex = this.options.savedList.list.findIndex((savedItem:any)=>savedItem[this.options.savedList.selectItemId] == option[this.options.selectItemId]);
    option.selected =  !option.selected;
    let itemFindedActions = ()=>{
      itemFinded[this.options.savedList.idToSave]?itemFinded.active = option.selected:null;
      !option.selected && !itemFinded[this.options.savedList.idToSave]?this.options.savedList.list.splice(itemFindedIndex, 1):null;
    }
    itemFinded?itemFindedActions():this.options.savedList.list.push(option);
    console.log(this.options.savedList.list);
  }

}
