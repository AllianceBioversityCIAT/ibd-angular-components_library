import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { selectNgModelOptions } from '../../models/select-ngmodel-options.interface';

@Component({
  selector: 'ibdc-select-ngmodel',
  templateUrl: './select-ngmodel.component.html',
  styleUrls: ['./select-ngmodel.component.scss']
})
export class SelectNgmodelComponent implements OnInit {

  searchText = '';
  @Input() options:selectNgModelOptions;
  
  selectInput:FormControl;

  fieldSelector= {
    class:'hide_field_selector',
    value:'244242424',
    name:''
  }


  // valors='asasasas';


 
  constructor() { }

  ngOnInit(): void {
    console.log(this.options.selectList);
    this.searchText = this.options.initialSearchText?this.options.initialSearchText:this.searchText;
  }

  findAndChangeFieldSelectorName(){
    // console.log(this.options.inputTitle);
    // console.log(this.selectList);
    if (this.options.item[this.options.itemId]) {
      this.fieldSelector.name = this.options.selectList.find((resp:any) =>resp[this.options.itemId].toString() == this.options.item[this.options.itemId])[this.options.itemName];
    }
  }

  disableOption(option){
    if ( this.options.toDisableList) {
      for (const code of this.options.toDisableList) {
        
        if (option[this.options.selectItemId]==code[this.options.selectItemId]) {
          return true;
        }
      }
    }else{
      return false;
    }
  }

  writtenInSearchField(){
    console.log("writtenInSearchField");
    // this.mapSelected();
  }

  toggle_field_selector_class(){
    this.fieldSelector.class =='show_field_selector'?this.fieldSelector.class ='hide_field_selector':this.fieldSelector.class ='show_field_selector'
  }

  onSelectOption(option){
    if (this.options?.itemName)this.options.item[this.options.itemName] = option[this.options.itemName];
    this.options.item[this.options.itemId] = option[this.options.itemId];
    this.fieldSelector.name = option[this.options.itemName];

  }

}
